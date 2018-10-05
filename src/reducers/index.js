import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import event from './event';
import createList, * as fromList from './createList';
import Constants from "../config/constants";


let redObj = {};

//generate reducer object for all categories present in the config file
for (cat in Constants.CATS) {
  redObj[Constants.CATS[cat].id]=createList(Constants.CATS[cat].id);
};

const listByFilter = combineReducers(redObj);

const events = combineReducers({
  byId,
  listByFilter,
});

export default events;

export const getVisibleEvents = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getEvent(state.byId, id));
}

export const getIsFetching = (state, filter) => 
  fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) => 
  fromList.getErrorMessage(state.listByFilter[filter]);
