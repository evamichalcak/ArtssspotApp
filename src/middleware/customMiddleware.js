import { fetchEvents } from "../actions/eventsActions"

export const selectInitialView = store => next => action => {
  console.log('enter middleware');
  if (action.type !== 'FETCH_EVENTS_FULFILLED') {
    console.log('passing....');
    return next(action);
  } else {
  	console.log('filterEvents call from middleware');
  	//store.dispatch(filterEvents(store.events.viewing, action.payload.eventsData));
    return next(action);
  }
}