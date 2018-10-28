import { combineReducers } from 'redux';
import openEvent, * as fromOpenEvent from './openEvent';
import byId, * as fromById from './byId';
import orderedList, * as fromList from './orderedList';
import Constants from "../config/constants";


let redObj = {};

const listByFilter = orderedList();

const events = combineReducers({
  byId,
  listByFilter,
  openEvent
});

// const events = (state = {}, action) => {
  // switch (action.type) {
  //   case 'TOGGLE_EVENT': 
  //   console.log('toggle in events, byIds');
  //     listByFilter(state.listByFilter, action)	
  //     return {
	 //    byId: byId(state.byId, action),
	 //    listByFilter: listByFilter(state.listByFilter, action),
	 //    openEvent: openEvent(state.openEvent, action),
  //     };
  //   default:
  //     return  {
	 //    byId: byId(state.byId, action),
	 //    listByFilter: listByFilter(state.listByFilter, action),
	 //    openEvent: openEvent(state.openEvent, action),
	 //  };
  // }
//   return {
//     byId: byId(state.byId, action),
//     listByFilter: listByFilter(state.listByFilter, action),
//     openEvent: openEvent(state.openEvent, action),
//   };
// };


//console.log(events.openEvent.openEvent);

export default events;

export const getVisibleEvents = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter, filter);
  //console.log(ids);
  return ids.map(id => fromById.getEvent(state.byId, id));
}

// export const toggleUniqueEvent = (state, id) => {
// 	console.log(id, state.openEvent);
// 	if (state.openEvent === false) {
// 		fromById.toggleEventOpen(state.byId, id);
// 		state.openEvent = id;
// 	} else {
// 		fromById.toggleEventOpen(state.byId, state.openEvent);
// 		fromById.toggleEventOpen(state.byId, id);
// 		state.openEvent = id;
// 	}
// }

// export const getEventOpen = (state, id) =>
// 	fromList.getEventOpen(state.byId, id);

export const getOpenEvent = (state) => 
  fromOpenEvent.getOpenEvent(state.openEvent);

export const getIsFetching = (state, filter) => 
  fromList.getIsFetching(state.listByFilter, filter);

export const getIsFetchingAny = (state) => 
  fromList.getIsFetchingAny(state.listByFilter);  

export const getErrorMessage = (state, filter) => 
  fromList.getErrorMessage(state.listByFilter, filter);
