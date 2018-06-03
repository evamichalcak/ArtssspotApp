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



export const fetchEvents3 = (filter, firstDate, lastDate) => {
    // getting dates for API call
    firstDate = firstDate || getDateString();
    lastDate = lastDate || getDateString(Constants.DAY_OFFSET);
    
    // putting together API endpoint
    let route = Constants.EVENTS_API_BASE + firstDate + '/' + lastDate + '/';
    

    return axios.get(route)
    .then((response) => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom!');
    // }
    console.log(response.data.found_posts);
    switch (filter) {
      case 'SHOW_ALL':
        return response.data.posts;
      case 'SHOW_ACTIVE':
        return response.data.posts;
      case 'SHOW_COMPLETED':
        return response.data.posts;
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }

  });
}
 

