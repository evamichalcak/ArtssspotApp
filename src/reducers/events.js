import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import event from './event';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  SHOW_ALL: createList('SHOW_ALL'),
  SHOW_ACTIVE: createList('SHOW_ACTIVE'), 
  SHOW_COMPLETED: createList('SHOW_COMPLETED'),
});

const events = combineReducers({
  byId,
  listByFilter,
});

export default events;

// const getAllEvents = (state) => 
//   state.allIds.map(id => state.byId[id]);

export const getVisibleEvents = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getEvent(state.byId, id));
}

export const getIsFetching = (state, filter) => 
  fromList.getIsFetching(state.listByFilter[filter]);

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