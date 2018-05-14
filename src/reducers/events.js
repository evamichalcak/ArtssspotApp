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
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.id];
    default:
      return state;
  }
};

const events = combineReducers({
  byId,
  allIds,
});

export default events;

const getAllEvents = (state) => 
  state.allIds.map(id => state.byId[id]);

export const getVisibleEvents = (state, filter) => {
  const allEvents = getAllEvents(state);
  switch (filter) {
    case 'SHOW_ALL': 
      return allEvents;
    case 'SHOW_COMPLETED':
      return allEvents.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return allEvents.filter(
        t => !t.completed
      );
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}