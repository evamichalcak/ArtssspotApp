import axios from "axios";
import Constants from "../config/constants";

const pad = (n) => n < 10 ? '0'+ n : n

const getDateString = (offset) => {
  // get date strings for api calls
  let currentDate = new Date();

  if (offset) {
    currentDate.setDate(currentDate.getDate()+offset);
  }

  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();

  return year + "-" + pad(month + 1) + "-" + pad(date);
}


export const fetchEvents = ( categoryId, config = {}) => {
    console.log('fetchEvents new: ', categoryId, config);
    // all calls have main category. Could be 'all' to ignore category
    // optional config object: startdate, enddate, overlap, exclude, orderby, order
    // paremeters to mandatory add or exclude second category: ?overlap=cat or ?exclude=cat
    // parameters to change order: order=ASC or order=DESC, default is ASC
    // parameter to show only events starting or finishing in selected time interval: ?soon=starting or ?soon=ending
    // parameter to change order key: ?orderby=_EventStartDate or ?orderby=_EventEndDate, default is _EventStartDate
    // when the orderby parameter is used with _EventEndDate, response fields _EventStartDate and _EventEndDate are both set to _EventEndDate, 
    // so use eventStart and eventEnd instead!!!

    //asign firstDate according to config and delete the property from config to not affect the for...in loop
    let firstDate;
    if (config.startdate) {
       firstDate = config.startdate;
       delete config.startdate;
    } else {
       firstDate = getDateString();
    }

    //asign lastDate according to config and delete the property from config to not affect the for...in loop
    let lastDate;
    if (config.enddate) {
       lastDate = config.enddate;
       delete config.enddate;
    } else {
       lastDate = (config.soon)? getDateString(Constants.DAY_OFFSET) : firstDate;
    }

    // generate query parameter string form remaining config object
    let paramString = "";
    // testing config for empty object, if not empty, add '?' to paramstring
    (Object.keys(config).length === 0 && config.constructor === Object)? paramString = '' : paramString = '?';
    // adding params from config object
    for (paramKey in config) {
      if (paramString.length > 1) {
        paramString += '&';
      }
      paramString += paramKey + '=' + config[paramKey]; 
    }

    // putting together API endpoint
    let route = Constants.EVENTS_API_BASE + firstDate + '/' + lastDate;
    if (!isNaN(parseInt(categoryId))) {
      route += '/cat/'+ categoryId;
    }
    route = route + '' + paramString;
    console.log('route: ', route);
    

    return axios.get(route)
      .then((response) => {
        // if (Math.random() > 0.5) {
        //   throw new Error('Boom!');
        // }

        console.log('fetchEventsNew');
        return response.data.posts;
      // getting dates for API call

      });
}
