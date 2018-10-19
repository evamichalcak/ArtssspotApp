const byId = (state={}, action) => {
  if (action.response) {
    return action.response.entities.events;
  }
  return state; 
};

export default byId;

export const getEvent = (state, id) => state[id];