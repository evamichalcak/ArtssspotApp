import { applyMiddleware, createStore } from "redux";

//import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
//import selectInitialView  from "./src/middleware/customMiddleware";

import reducer from "./src/reducers";

// store.subscribe(() => {
// 	console.log(action.type);
// });



// const selectInitialView = store => next => action => {
// 	if (action.type !== 'FETCH_EVENTS_FULFILLED') {
// 		console.log('wrong action, middleware');
// 		return next(action);
// 	} else {
// 		//console.log('right action, middleware');
// 		console.log(action.type);
//     	store.dispatch(filterEvents2());
// 		return next(action);
// 	}
// }

// const selectInitialView = store => next => action => {
//   console.log('enter middleware');
//   console.log(action.type);

//   if (action.type !== 'FETCH_EVENTS_FULFILLED') {
//     console.log('passing....xxxxx');
//     return next(action);
//   } else {
//   	console.log('filterEvents call from middleware');
//   	console.log(store.getState().events.viewing);
//   	console.log(action.payload);
//   	store.dispatch(filterEvents(store.getState().events.viewing, action.payload.eventsData));
//     return next(action);
//   }
// }



//const middleware = applyMiddleware(promise(), thunk, logger, selectInitialView);
//const middleware = applyMiddleware(promise(), thunk, selectInitialView);
const middleware = applyMiddleware(promise(), thunk);

export default createStore(reducer, middleware);
