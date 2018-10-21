const Constants = {
  EVENTS_API_BASE: "https://www.artssspot.com/barcelona/en/wp-json/tribe_events/v2/sss_events/",
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
      id: '147',
      text: 'The unmissables',
      slug: 'the-unmissables',
      params: {
        'order': 'DESC',
      }
    },
    'recommended': {
      id: '123',
      text: 'The recommended',
      slug: 'recommended',
      params: {
        'order': 'DESC',
      }
    },
    'discovery':  {
      id: '120',
      text: 'To discover',
      slug: 'to-discover',
      params: {
        'order': 'DESC',
      }
    },
    'activities': {
      id: '146',
      text: 'Recommended activities',
      slug: 'recommended-activities',
       params: { 
        'soon' : 'starting',
      }
    },
    'openings': {
      id: '188',
      text: 'Upcoming openings',
      slug: 'upcoming-openings',
      params: { 
        'soon' : 'starting',
      }
    },
    'contemporary': {
      id: '136',
      text: 'Contemporary Art',
      slug: 'contemporary-art',
      params: { 
         'order': 'DESC',
      }
    },
    'design': {
      id: '122',
      text: 'Design',
      slug: 'design',
      params: { 
         'order': 'DESC',
      }
    },
    'photography': {
      id: '143',
      text: 'Photography',
      slug: 'photography',
      params: { 
         'order': 'DESC',
      }
    },
    'urban': {
      id: '138',
      text: 'Urban art',
      slug: 'urban-art',
      params: { 
         'order': 'DESC',
      }
    },
    'architecture': {
      id: '133',
      text: 'Architecture',
      slug: 'architecture',
      params: { 
         'order': 'DESC',
      }
    },
    'illustration': {
      id: '139',
      text: 'Illustration',
      slug: 'illustration',
      params: { 
         'order': 'DESC',
      }
    },
  },
}

export default Constants;