// before category api refactor
import { combineReducers } from 'redux';  

const createList = (filter) => {

  const ids = (state = [], action) => {
    // if (action.filter !== filter) {
    //   return state;
    // }
    switch (action.type) {
      case 'FETCH_EVENTS_SUCCESS':
        return action.response.result;
        // if (action.filter === 'all') {
        //   return action.response.result;
        // }        
        // if (action.filter === 'all') {
        //   return action.response.result;
        // } else if (action.filter === 'home') {
        //   let homearr = [
        //     ...action.response.entities.eventCategories['100']['posts'],
        //     ...action.response.entities.eventCategories['101']['posts'],
        //     ...action.response.entities.eventCategories['102']['posts']
        //     ]
        //   return homearr;
        // } else {
        //   return filter === action.filter ? 
        //     action.response.entities.eventCategories[filter]['posts'] : 
        //     state;
        // }
      default:
        return state;
    }
  }


  const isFetching = (state = false, action) => {
    // if (action.filter !== filter) {
    //   return state;
    // }
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
    // if (filter !== action.filter) {
    //   return state;
    // }
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