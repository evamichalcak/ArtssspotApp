import { combineReducers } from 'redux';  

const orderedList = () => {

  const ids = (state=[], action) => {
	if (action.response) {
  	//console.log('---ides reducer----', typeof action.response);
	  return [
	    ...state,
	    ...action.response.result,
	  ]
	}
	return state; 
  }


  const isFetching = (state = false, action) => {
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

export default orderedList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;