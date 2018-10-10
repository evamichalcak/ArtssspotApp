import axios from "axios";
import Constants from "../config/constants";

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

// const fakeDatabase = {
//   events: [
//   {
//     id: 'a0',
//     text: 'hey',
//     completed: true,
//   }, 
//   {
//     id: 'a1',
//     text: 'ho',
//     completed: true,
//   }, 
//   {
//     id: 'a2',
//     text: 'let’s go',
//     completed: false,
//   }
//   ],
// };

// const delay = (ms) =>
//   new Promise(resolve => setTimeout(resolve, ms));

// export const fetchEvents2 = (filter) => 
//   delay(500).then(() => {
//     // if (Math.random() > 0.5) {
//     //   throw new Error('Boom!');
//     // }
//     switch (filter) {
//       case 'SHOW_ALL':
//         return fakeDatabase.events;
//       case 'SHOW_ACTIVE':
//         return fakeDatabase.events.filter(t => !t.completed);
//       case 'SHOW_COMPLETED':
//         return fakeDatabase.events.filter(t => t.completed);
//       default:
//         throw new Error(`Unknown filter: ${filter}`);
//     }
//   });



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
  // all calls have main category. Could be 'all' to ignore category
  // optional config object: startdate, enddate, overlap, exclude, orderby, order
  // paremeters to mandatory add or exclude second category: ?overlap=cat or ?exclude=cat
  // parameters to change order: order=ASC or order=DESC, default is ASC
  // parameter to show only events starting or finishing in selected time interval: ?soon=starting or ?soon=ending
  // parameter to change order key: ?orderby=_EventStartDate or ?orderby=_EventEndDate, default is _EventStartDate
  // when the orderby parameter is used with _EventEndDate, response fields _EventStartDate and _EventEndDate are both set to _EventEndDate, 
  // so use eventStart and eventEnd instead!!!
  
  console.log('fetchEventsNew');
  // getting dates for API call
  let firstDate = config.startdate || getDateString();
  //lastDate = config.enddate || getDateString(Constants.DAY_OFFSET);
  let lastDate = config.enddate || firstDate;

  let paramString = '?';

  if (config.overlap) {

  }
  if (config.exclude) {

  }
  if (config.soon) {

  }

   // putting together API endpoint
    let route = Constants.EVENTS_API_BASE + firstDate + '/' + lastDate + '/cat/' + categoryId + paramSting;
    //console.log('route: ' + route);
    

    return axios.get(route)
    .then((response) => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom!');
    // }

    return response.data.posts;

}


export const fetchEvents3 = (firstDate, lastDate) => {
    console.log('fetchEvents3');
    // getting dates for API call
    firstDate = firstDate || getDateString();
    lastDate = lastDate || getDateString(Constants.DAY_OFFSET);
    
    // putting together API endpoint
    let route = Constants.EVENTS_API_BASE + firstDate + '/' + lastDate + '/';
    //console.log('route: ' + route);
    

    return axios.get(route)
    .then((response) => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom!');
    // }

    return response.data.posts;

  });
}
 

