const byId = (state={}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.posts,
    }
  }
  return state; 
};

export default byId;

export const getEvent = (state, id) => state[id];