import { schema, arrayOf } from 'normalizr';

export const event = new schema.Entity('posts');
export const eventsListSchema = new schema.Array(event);