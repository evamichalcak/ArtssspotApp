import Constants from "../config/constants";
let today = new Date;
let endday = new Date;
endday.setDate(endday.getDate() + Constants.DAY_OFFSET);

export default function reducer(state={
    responseData: [],
    eventsData: [],
    viewingData: [],
    lastUpdate: new Date(0),
    firstDate: today.toISOString().slice(0, 10),
    lastDate: endday.toISOString().slice(0, 10),
    viewing: 'today',
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
          eventsData: action.payload.eventsData,
        }
      }
      case "FILTER_EVENTS": {
        return {
          ...state,
          viewingData: action.payload,
        }
      }
    }

    return state;
}