const Constants = {
  EVENTS_API_BASE: "https://artssspot.com/barcelona/wp-json/tribe_events/v2/sss_events/",
  DAY_OFFSET : 10,
  CATS: {

  // optional config object: startdate, enddate, overlap, exclude, orderby, order
  // paremeters to mandatory add or exclude second category: ?overlap=cat or ?exclude=cat
  // parameters to change order: order=ASC or order=DESC, default is ASC
  // parameter to show only events starting or finishing in selected time interval: ?soon=starting or ?soon=ending
  // parameter to change order key: ?orderby=_EventStartDate or ?orderby=_EventEndDate, default is _EventStartDate
  // when the orderby parameter is used with _EventEndDate, response fields _EventStartDate and _EventEndDate are both set to _EventEndDate, 
  // so use eventStart and eventEnd instead!!!

    'home': {
      id: 'home',
      text: 'Home',
      slug: '',
      params: {}
    },
    'all' : {
      id: 'all',
      text: 'All',
      slug: '',
      params: {}
    },
    'unmissables': {
      id: '100',
      text: 'Los imperdibles',
      slug: 'los-imperdibles',
      params: {
        'order': 'DESC',
      }
    }, //100
    'recommended': {
      id: '101',
      text: 'Los recomendados',
      slug: 'los-recomendados',
      params: {
        'order': 'DESC',
      }
    }, //101
    'discovery':  {
      id: '102',
      text: 'Para descubrir',
      slug: 'para-descubrir',
      params: {
        'order': 'DESC',
      }
    }, //102
    'activities': {
      id: '99',
      text: 'Actividades recomendadas',
      slug: 'actividades-recomendadas',
       params: { 
        'soon' : 'starting',
      }
    }, //99
    'openings': {
      id: '190',
      text: 'Próximas inauguraciones',
      slug: 'proximas-inauguraciones',
      params: { 
        'soon' : 'starting',
      }
    }, //190
  },
}

export default Constants;