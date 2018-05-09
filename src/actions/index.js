let nextEventId = 0;
export const addEvent = (text) => {
  return {
    type: 'ADD_EVENT',
    id: nextEventId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
}

export const toggleEvent = (id) => {
  return {
    type: 'TOGGLE_EVENT',
    id
  }
}
