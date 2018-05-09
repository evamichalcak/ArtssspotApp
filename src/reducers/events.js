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

const events = (state=[], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
      ...state,
      todo(undefined, action)
      ]
    case 'TOGGLE_EVENT': 
      return state.map(t => 
          todo(t, action)
        );
    default:
      return state;
  }
};

export default events;

export const getVisibleEvents = (state, filter) => {
  switch (filter) {
    case 'SHOW_ALL': 
      return state;
    case 'SHOW_COMPLETED':
      return state.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return state.filter(
        t => !t.completed
      );
  }
}