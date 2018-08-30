import { combineReducers } from 'redux';  

const createList = (filter) => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    console.log('filter in createList: ' + filter);
    console.log('action in createList: ' + action.type);
    //console.log(action.response);
    switch (action.type) {
      case 'FETCH_EVENTS_SUCCESS':
      console.log('in fetch events success', action.filter);
        if (action.filter === 'all') {
          //console.log(JSON.stringify(state), 'all filter on fetch');
          return action.response.result;
        } else if (action.filter === 'home') {
          let homearr = [
            ...action.response.entities.eventCategories['100']['posts'],
            ...action.response.entities.eventCategories['101']['posts'],
            ...action.response.entities.eventCategories['102']['posts']
            ]
          //console.log(JSON.stringify(homearr), 'homearr on fetch');
          return homearr;
        } else {
          console.log('last else------', filter);
          return filter === action.filter ? 
            action.response.entities.eventCategories[filter]['posts'] : 
            state;
        }
      // case 'TOGGLE_EVENT':
      // console.log('toggling');
      //    return state.entities.eventCategories[action.filter]['posts'];
      case 'categories':
        console.log(filter);
        return  state
      // case 'SET_VISIBILITY_FILTER':
      // console.log('visiblityfilter is set, i am in createList');
      // console.log(JSON.stringify(state), 'state in createList, visiblityfilter');
      //    return state;
         //return state.entities.eventCategories[action.filter]['posts'];
      default:
      console.log('in default of createList');
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