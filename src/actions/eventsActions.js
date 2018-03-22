import axios from "axios";
import Constants from "../config/constants";

export function fetchEvents() {
  return function(dispatch) {
    dispatch({type: "FETCH_EVENTS"});
    
    // getting date strings for API endpoint
    let today = new Date;
    let firstday = today.toISOString().slice(0, 10);
    today.setDate(today.getDate() + Constants.DAY_OFFSET);
    let lastday = today.toISOString().slice(0, 10);
    let route = Constants.EVENTS_API_BASE + firstday + '/' + lastday + '/';

    axios.get(route)
      .then((response) => {
        dispatch({type: "FETCH_EVENTS_FULFILLED", payload: response.data })
      })
      .catch((err) => {
        dispatch({type: "FETCH_EVENTS_REJECTED", payload: err})
      })
  }
}
