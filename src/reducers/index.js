import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import event from './event';
import orderedList, * as fromList from './orderedList';
import Constants from "../config/constants";


let redObj = {};

const listByFilter = orderedList();

const events = combineReducers({
  byId,
  listByFilter,
});

export default events;

export const getVisibleEvents = (state) => {
  const ids = fromList.getIds(state.listByFilter);
  return ids.map(id => fromById.getEvent(state.byId, id));
}

export const getIsFetching = (state) => 
  fromList.getIsFetching(state.listByFilter);

export const getErrorMessage = (state) => 
  fromList.getErrorMessage(state.listByFilter);
