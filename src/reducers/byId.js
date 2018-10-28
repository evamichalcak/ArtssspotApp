import event, * as fromEvent from './event';

const byId = (state={}, action) => {
  if (action.response) {
    return {
    	...state,
    	...action.response.entities.posts
	};
  }
  switch (action.type) {
    case 'TOGGLE_EVENT': 
    console.log('action.id in byIds', action.id);
      return {
        ...state,
        [action.id]: event(state[action.id], action),
      };
    default:
      return state;
  }
  return state; 
};

export default byId;

export const getEvent = (state, id) => state[id];
export const getEventOpen = (state, id) => fromEvent.getEventOpen(state[id]);
//export const toggleEventOpen = (state, id) => state[id]['open'] = !state[id]['open'];