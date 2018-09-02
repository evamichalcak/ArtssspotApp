const Constants = {
  EVENTS_API_BASE: "https://artssspot.com/barcelona/wp-json/tribe_events/v2/sss_events/",
  DAY_OFFSET : 10,
  CATS: {
    'home': {
      id: 'home',
      text: 'Home',
      slug: 'sss-home'
    },
    'all' : {
      id: 'all',
      text: 'All',
      slug: ''
    },
    'los-imperdibles': {
      id: '100',
      text: 'Los imperdibles',
      slug: 'los-imperdibles'
    }, //100
    'los-recomendados': {
      id: '101',
      text: 'Los recomendados',
      slug: 'los-recomendados'
    }, //101
    'para-descubrir':  {
      id: '102',
      text: 'Para descubrir',
      slug: 'para-descubrir'
    }, //102
    'actividades-recomendadas': {
      id: '99',
      text: 'Actividades recomendadas',
      slug: 'actividades-recomendadas'
    }, //99
    'proximas-inauguraciones': {
      id: '190',
      text: 'Próximas inauguraciones',
      slug: 'proximas-inauguraciones'
    }, //190
  },
}

export default Constants;