import { schema } from 'normalizr';

// export const event = new Schema('posts');
// export const arrayOfEvents = arrayOf(todo);

// export const event = new schema.entity('event');
// export const events = { events: [event]}
// export const arrayOfEvents = arrayOf(event);

export const categorySchema = new schema.Entity('eventCategories',  {
		posts: [eventSchema]
	},
	{ 
		mergeStrategy: (entityA, entityB) => ({
			...entityA,
			...entityB,
	        posts: [...entityA.posts, entityB.posts]
	    })
	},
);
export const eventSchema = new schema.Entity('events', {
	eventCategories: [categorySchema]
});
export const eventsListSchema = new schema.Array(eventSchema);


// export const categorySchema = new schema.Entity('eventCategories');
// export const eventSchema = new schema.Entity('events');
// export const eventsListSchema = new schema.Array(eventSchema);

// export const event = new schema.Entity('events');
// export const eventsListSchema = { event: [ event ] }