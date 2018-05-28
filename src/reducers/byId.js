const byId = (state={}, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS_SUCCESS':
      const nextState = { ...state };
      action.response.forEach(event => {
        nextState[event.id] = event;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getEvent = (state, id) => state[id];