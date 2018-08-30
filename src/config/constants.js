const Constants = {
  EVENTS_API_BASE: "https://artssspot.com/barcelona/wp-json/tribe_events/v2/sss_events/",
  DAY_OFFSET : 0,
  CATS: {
  	'home': ['Los imperdibles', 'Los recomendados', 'Actividades recomendadas'],
  	'all' : 'all',
    // 'Los imperdibles': 'los-imperdibles', //100
    // 'Los recomendados': 'los-recomendados', //101
    // 'Para descubrir':  'para-descubrir', //102
    // 'Actividades recomendadas': 'actividades-recomendadas', //99
    // 'Próximas inauguraciones': 'proximas-inauguraciones', //190

    'Los imperdibles': '100',
    'Los recomendados': '101',
    'Para descubrir':  '102',
    'Actividades recomendadas': '99',
    'Próximas inauguraciones': '190',
  },
  // API_MAP: {
  // 	"root": "posts",
  //   "props": {
  //   	"eventStart": "EventStartDate",
  //     "eventEnd": "EventEndDate",
  //     "eventLink": "eventLink",
  //     "eventImage": "eventImage",
  //     "eventSummary": "eventExcerpt",
  //     "eventTitle": "eventTitle",
  //     "eventVenue": "eventVenueName",
  //     "eventAddress": "eventVenueAddress",
  //     "eventCategories": "eventCategories",
  //   }
  // }
}

export default Constants;