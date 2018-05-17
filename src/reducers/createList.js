import { combineReducers } from 'redux';  

const createList = (filter) => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'RECEIVE_EVENTS':
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'REQUEST_EVENTS':
        return true;
      case 'RECEIVE_EVENTS':
        return false;
      default:
        return state;
    }
  }

  return combineReducers({
    ids,
    isFetching,
  });

};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.IsFetching;