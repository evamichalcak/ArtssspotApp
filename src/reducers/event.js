const event = (state, action) => {
  //console.log(state);
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

export const getEventOpen = (state) => state.open;