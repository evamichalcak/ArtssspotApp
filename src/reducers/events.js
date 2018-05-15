import { combineReducers } from 'redux';
import event from './event';

const byId = (state={}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
    case 'TOGGLE_EVENT':
      return {
        ...state,
        [action.id]: event(state[action.id], action)
      }
    default:
      return state;
  }
};

const allIds = (state=[], action) => {
  if (action.filter !== 'SHOW_ALL') {
    return state;
  }
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const activeIds = (state=[], action) => {
  if (action.filter !== 'SHOW_ACTIVE') {
    return state;
  }
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const completedIds = (state=[], action) => {
  if (action.filter !== 'SHOW_COMPLETED') {
    return state;
  }
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  SHOW_ALL: allIds,
  SHOW_ACTIVE: activeIds, 
  SHOW_COMPLETED: completedIds,
});

const events = combineReducers({
  byId,
  idsByFilter,
});

export default events;

// const getAllEvents = (state) => 
//   state.allIds.map(id => state.byId[id]);

export const getVisibleEvents = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
}

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