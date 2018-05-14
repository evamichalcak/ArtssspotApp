const event = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_EVENT': 
      if (state.id !== action.id) {
        return state;
      } 
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

export default event;