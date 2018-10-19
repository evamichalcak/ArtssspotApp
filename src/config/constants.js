const Constants = {
  EVENTS_API_BASE: "http://artssspot.com/barcelona/wp-json/tribe_events/v2/sss_events/",
  DAY_OFFSET : 14,
  CATS: {
  	'home': ['Los imperdibles', 'Los recomendados', 'Actividades recomendadas'],
  	'all' : '',
  	'Los imperdibles': 100,
  	'Los recomendados': 101,
  	'Actividades recomendadas': 99,
  	'Próximas inauguraciones': 190,
  },
  API_MAP: {
  	"root": "posts",
    "props": {
    	"eventStart": "EventStartDate",
      "eventEnd": "EventEndDate",
      "eventLink": "eventLink",
      "eventImage": "eventImage",
      "eventSummary": "eventExcerpt",
      "eventTitle": "eventTitle",
      "eventVenue": "eventVenueName",
      "eventAddress": "eventVenueAddress",
      "eventCategories": "eventCategories",
    }
  }
}

export default Constants;