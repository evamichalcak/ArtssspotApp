import * as api from "../api";
import { getIsFetching, getVisibleEvents, getOpenEvent } from "../reducers";
import { normalize } from 'normalizr';
import * as schema from './schema';

let nextEventId = 0;

//thunk action
export const toggleEvent = (id) => (dispatch, getState) => {
  let previous = getOpenEvent(getState());
  // console.log('id at start', id);
  // console.log('previou at start', previous);
  if (!previous) {
  // console.log('id in first if', id);
  // console.log('previou in first if', previous);
    dispatch({
        type: 'TOGGLE_EVENT',
        id
      });
  } else {
    
  // console.log('id in else', id);
  // console.log('previous in else', previous);
    if (previous !== id) {
  // console.log('id in second if', id);
  // console.log('previou in second if', previous);
      dispatch({
        type: 'TOGGLE_EVENT',
        id,
        previous
      });
      dispatch({
        type: 'TOGGLE_EVENT',
        id
      });
    } else { 
  // console.log('id in second else', id);
  // console.log('previou in second else', previous);
      dispatch({
        type: 'TOGGLE_EVENT',
        id
      });
    }
  }
}

//thunk action
export const fetchEvents = (cat, params, filter) => (dispatch, getState) => {
  //we have already a api request running for this filter
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  //announce fetching start
  dispatch({
      type: 'FETCH_EVENTS_REQUEST',
      cat,
      params, 
      filter
    });
  //fetch from api
  return api.fetchEvents(cat, params).then(
    response => {
      //console.log(normalize( response, schema.eventsListSchema));
      //announce fetching end
      dispatch({
        type: 'FETCH_EVENTS_SUCCESS',
        response: normalize( response, schema.eventsListSchema),
        cat,
        params, 
        filter
      });
    },
    error => {
      //transmit error
      dispatch({
        type: 'FETCH_EVENTS_FAILURE',
        cat,
        params, 
        filter,
        message: error.message || 'Something went wrong'
      });
    }
  );
}
