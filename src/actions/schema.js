import { schema } from 'normalizr';

// export const event = new Schema('posts');
// export const arrayOfEvents = arrayOf(todo);

// export const event = new schema.entity('event');
// export const events = { events: [event]}
// export const arrayOfEvents = arrayOf(event);

export const eventSchema = new schema.Entity('events');
export const eventsListSchema = new schema.Array(eventSchema);

// export const event = new schema.Entity('events');
// export const eventsListSchema = { event: [ event ] }