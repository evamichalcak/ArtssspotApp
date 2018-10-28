const openEvent = (state={}, action) => {
	switch (action.type) {
    case 'TOGGLE_EVENT': 
    console.log('toggle in openEvent');
    //return state;
		if (action.previous) {
			return state;
		}
	    if (state.openEvent === action.id) {
			return {
				...state,
				openEvent: false
			}
		} else {
			return {
				...state,
				openEvent: action.id
			}
		};
    default:
      return state;
  }
}

export default openEvent;

export const getOpenEvent = (state) => state.openEvent;