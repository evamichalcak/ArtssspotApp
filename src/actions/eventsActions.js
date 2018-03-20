import axios from "axios";
import Constants from "./config/constants";

export function fetchEvents() {
  return function(dispatch) {
    dispatch({type: "FETCH_EVENTS"});
    
    // xxxxxxxxxxxxxx continue: format dates for route and pass route to axios
    // const today = new Date;
    // const route = Constants.EVENTS_API_BASE + today

    axios.get("http://artssspot.com/barcelona/wp-json/tribe_events/v2/sss_events/2018-03-17/2018-03-31/")
      .then((response) => {
        dispatch({type: "FETCH_EVENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EVENTS_REJECTED", payload: err})
      })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}