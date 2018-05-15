import * as api from "../api";

let nextEventId = 0;

export const addEvent = (text) => {
  return {
    type: 'ADD_EVENT',
    id: nextEventId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
}

export const toggleEvent = (id) => {
  return {
    type: 'TOGGLE_EVENT',
    id
  }
}

const receiveEvent = (response) => {
  return {
    type: 'RECEIVE_EVENT',
    response
  }
}

export const fetchEvents = (filter) => {
  api.fetchEvents2(filter).then(response => 
    receiveEvent(response)
  );
}
