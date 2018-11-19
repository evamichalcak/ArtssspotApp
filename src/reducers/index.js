import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import orderedList, * as fromList from './orderedList';
import Constants from "../config/constants";


let redObj = {};

const listByFilter = orderedList();

const events = combineReducers({
  byId,
  listByFilter,
});

export default events;

export const getVisibleEvents = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter, filter);
  //console.log(ids);
  return ids.map(id => fromById.getEvent(state.byId, id));
}

export const getIsFetching = (state, filter) => 
  fromList.getIsFetching(state.listByFilter, filter);

export const getIsFetchingAny = (state) => 
  fromList.getIsFetchingAny(state.listByFilter);  

export const getErrorMessage = (state, filter) => 
  fromList.getErrorMessage(state.listByFilter, filter);