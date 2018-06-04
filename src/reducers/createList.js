import { combineReducers } from 'redux';  

const createList = (filter) => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    console.log(filter);
    switch (action.type) {
      case 'FETCH_EVENTS_SUCCESS':
        if (action.filter === ('home' || 'all')) {
          return action.response.result;
        } else {
          return filter === action.filter ? 
            action.response.entities.eventCategories[filter].posts : 
            state;
        }
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_EVENTS_REQUEST':
        return true;
      case 'FETCH_EVENTS_SUCCESS':
      case 'FETCH_EVENTS_FAILURE':
        return false;
      default:
        return state;
    }
  }

  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_EVENTS_FAILURE':
        return action.message;
      case 'FETCH_EVENTS_SUCCESS':
      case 'FETCH_EVENTS_REQUEST':
        return null;
      default:
        return state;
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });

};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;