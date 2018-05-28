import * as api from "../api";
import { getIsFetching } from "../reducers";

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

//thunk action
export const fetchEvents = (filter) => (dispatch, getState) => {
  //we have already a api request running for this filter
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  //announce fetching start
  dispatch({
      type: 'FETCH_EVENTS_REQUEST',
      filter
    });
  //fetch from api
  return api.fetchEvents2(filter).then(
    response => {
      //announce fetching end
      dispatch({
        type: 'FETCH_EVENTS_SUCCESS',
        response,
        filter
      });
    },
    error => {
      //transmit error
      dispatch({
        type: 'FETCH_EVENTS_FAILURE',
        filter,
        message: error.message || 'Something went wrong'
      });
    }
  );
}
