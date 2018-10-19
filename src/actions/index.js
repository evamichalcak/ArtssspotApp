import * as api from "../api";
import { getIsFetching, getVisibleEvents } from "../reducers";
import { normalize } from 'normalizr';
import * as schema from './schema';

let nextEventId = 0;

// export const setVisibilityFilter = (filter) => {
//   console.log('visibility filter in setVisibilityFilter: ' + filter);
//   return {
//       type: 'SET_VISIBILITY_FILTER',
//       filter
//     }
// }

export const toggleEvent = (filter) => {
  console.log('visibility filter in toggleEvent: ' + filter);
  return {
    type: 'TOGGLE_EVENT',
    filter
  }
}

//thunk action
export const fetchEvents = (filter) => (dispatch, getState) => {
  console.log('inside fetchevents action');
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
  return api.fetchEvents(filter).then(
    response => {
      //console.log(normalize( response, schema.eventsListSchema));
      //announce fetching end
      dispatch({
        type: 'FETCH_EVENTS_SUCCESS',
        response: normalize( response, schema.eventsListSchema),
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