import axios from "axios";
import Constants from "../config/constants";

export function fetchEvents(firstDate, lastDate) {
  return function(dispatch) {
    dispatch({type: "FETCH_EVENTS"});
    
    // putting together API endpoint
    let route = Constants.EVENTS_API_BASE + firstDate + '/' + lastDate + '/';

    // getting data from WP API
    axios.get(route)
      .then((response) => {
        // map data from API to custom format
        eventsData = formatEventsArray(response.data);
        dispatch({type: "FETCH_EVENTS_FULFILLED", payload: { rawData: response.data, eventsData: eventsData } })
      })
      .catch((err) => {
        dispatch({type: "FETCH_EVENTS_REJECTED", payload: err})
      })
  }
}

export function filterEvents(viewing, data) {
  return function(dispatch) {
    let filtered = [];
    // checks what we are viewing and filters for categories accordingly with filterForCat
    switch (viewing) {
      case "today": {
        filtered = filterForToday(data);
        break;
      }
      default: {
        filtered = null;
        break;
      }
    }
    dispatch({type: "FILTER_EVENTS", payload: filtered});
  }
}




function formatEventsArray(data) {
  // formats event array in an uniform way according to API_MAP
  let tempArray, finalArray;
  // check if data is array or find array in it's root
  if (Array.isArray(data)) {
    tempArray = data;
  } else {
    tempArray = data[Constants.API_MAP['root']];
  }
  // remap event array with remapProps using API_MAP.props
  finalArray = tempArray.map(remapProps);
  return finalArray;
}


function remapProps(obj, propMap) {
  let mapped ={}
  for (p in Constants.API_MAP['props']) {
    mapped[p] = obj[Constants.API_MAP['props'][p]];
  }
  return mapped;
}


function filterForToday(data) {
  // pushes al events from data array that start after startdate in new array in ASC order
  let today = new Date;
  return  data.filter(event => event.eventStart <= today);
}

function filterForOpenings(startdate, data) {
  // pushes al events from data array that start after startdate in new array in ASC order
  
}

function filterForCat(cat, data) {
  //filters data array for all events that have the given category
}