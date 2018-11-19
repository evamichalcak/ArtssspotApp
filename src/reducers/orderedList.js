import { combineReducers } from 'redux';  

const orderedList = () => {

  const ids = (state={}, action) => {
	if (action.response) {
	  return {
      ...state,
      [action.filter]: action.response.result,
    };
	}
	return state; 
  }

  const isFetching = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_EVENTS_REQUEST':
        return {
          ...state,
          [action.filter]: true,
        };
      case 'FETCH_EVENTS_SUCCESS':
      case 'FETCH_EVENTS_FAILURE':
        return {
          ...state,
          [action.filter]: false,
        };
      default:
        return state;
    }
  }

  const errorMessage = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_EVENTS_FAILURE':
        return {
          ...state,
          [action.filter]: action.message,
        };
      case 'FETCH_EVENTS_SUCCESS':
      case 'FETCH_EVENTS_REQUEST':
        return {
          ...state,
          [action.filter]: null,
        };
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

export default orderedList;

export const getIds = (state, filter) => state.ids[filter] || [];
export const getIsFetching = (state, filter) => state.isFetching[filter] || false;
export const getIsFetchingAny = (state) => { 
  for (filter in state.isFetching) {
     if (state.isFetching[filter] === true) {
      return true;
     }
  } return false
};
export const getErrorMessage = (state, filter) => state.errorMessage[filter] || null;