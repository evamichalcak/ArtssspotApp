export default function reducer(state={
    eventData: {},
    lastUpdate: new Date(0);
    viewing: 'All',
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_EVENTS": {
        return {...state, fetching: true}
      }
       case "FETCH_EVENTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_EVENTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          eventData: action.payload,
        }
      }
    }

    return state;
}