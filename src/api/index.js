// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  events: [{
    id: 'a0',
    text: 'hey',
    completed: true,
  }, {
    id: 'a1',
    text: 'ho',
    completed: true,
  }, {
    id: 'a2',
    text: 'let’s go',
    completed: false,
  }],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchEvents2 = (filter) =>
  delay(500).then(() => {
    switch (filter) {
      case 'SHOW_ALL':
        return fakeDatabase.events;
      case 'SHOW_ACTIVE':
        return fakeDatabase.events.filter(t => !t.completed);
      case 'SHOW_COMPLETED':
        return fakeDatabase.events.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });