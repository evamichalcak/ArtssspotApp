import * as api from "../api";
import { getIsFetching, getVisibleEvents } from "../reducers";
import { normalize } from 'normalizr';
import * as schema from './schema';

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
