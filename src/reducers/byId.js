const byId = (state={}, action) => {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
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