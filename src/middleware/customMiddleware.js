import { fetchEvents } from "../actions/eventsActions"

export const selectInitialView = store => next => action => {
  console.log('enter middleware');
  if (action.type !== 'FETCH_EVENTS_FULFILLED') {
    console.log('passing....');
    return next(action);
  } else {
  	console.log('filterEvents call from middleware');
    return next(action);
  }
}