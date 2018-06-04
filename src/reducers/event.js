const event = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EVENT': 
      if (state.id !== action.id) {
        return state;
      } 
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
};

export default event;