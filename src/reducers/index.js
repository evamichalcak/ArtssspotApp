// import { combineReducers } from "redux";

// import events from "./eventsReducer";
// import user from "./userReducer";

// export default combineReducers({
// 	events, 
// 	user,
// });


import { combineReducers } from 'redux';
import events, * as fromEvents from './events';
import visibilityFilter, * as fromVisibilityFilter from './visibilityFilter';
import * as fromList from './createList';

const eventsApp = combineReducers({events, visibilityFilter});

export default eventsApp;

export const getVisibleEvents = (state, filter) => 
	fromEvents.getVisibleEvents(state.events, filter);

export const getVisibilityFilter = (state) => 
	fromVisibilityFilter.getVisibilityFilter(state.visibilityFilter);

export const getIsFetching = (state, filter) => 
	fromEvents.getIsFetching(state.events, filter);