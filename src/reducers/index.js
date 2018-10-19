import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import event from './event';
import createList, * as fromList from './createList';
import Constants from "../config/constants";
import orderedList from './orderedList';

let redObj = {};

//generate reducer object for all categories present in the config file
// for (cat in Constants.CATS) {
//   redObj[Constants.CATS[cat].id]=createList(Constants.CATS[cat].id);
// };

const listByFilter = orderedList();

const events = combineReducers({
  byId,
  listByFilter,
});

export default events;

export const getVisibleEvents = (state) => {
  console.log('fromList.getIds(state.listByFilter).length', fromList.getIds(state.listByFilter).length)
  const ids = fromList.getIds(state.listByFilter);
  return ids.map(id => fromById.getEvent(state.byId, id));
}

export const getIsFetching = (state) => 
  fromList.getIsFetching(state.listByFilter);

export const getErrorMessage = (state) => 
  fromList.getErrorMessage(state.listByFilter);
