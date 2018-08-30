import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import event from './event';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  home: createList('home'),
  all: createList('all'),
  '100': createList('100'),
  '101': createList('101'),
  '102': createList('102'),
  '99': createList('99'),
  '190': createList('190'),
});

const events = combineReducers({
  byId,
  listByFilter,
});

export default events;

// const getAllEvents = (state) => 
//   state.allIds.map(id => state.byId[id]);

export const getVisibleEvents = (state, filter) => {
	console.log('in getVisibleEvents: ' + filter);
  const ids = fromList.getIds(state.listByFilter[filter]);
  console.log(ids);
  //console.log(JSON.stringify(state), 'in getVisibleEvents');
  return ids.map(id => fromById.getEvent(state.byId, id));
}

export const getIsFetching = (state, filter) => 
  fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) => 
  fromList.getErrorMessage(state.listByFilter[filter]);

// export const getVisibleEvents = (state, filter) => {
//   const allEvents = getAllEvents(state);
//   switch (filter) {
//     case 'SHOW_ALL': 
//       return allEvents;
//     case 'SHOW_COMPLETED':
//       return allEvents.filter(
//         t => t.completed
//       );
//     case 'SHOW_ACTIVE':
//       return allEvents.filter(
//         t => !t.completed
//       );
//     default:
//       throw new Error(`Unknown filter: ${filter}.`);
//   }
// }