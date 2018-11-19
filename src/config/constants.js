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

    'all' : {
      id: 'all',
      text: 'All',
      slug: '',
      params: {}
    },
    'home': {
      id: 'home',
      text: 'Home',
      slug: '',
      params: {}
    },
    'home1': {
      id: '242',
      text: 'The unmissables',
      slug: 'home-1',
      params: {
        'order': 'DESC',
      }
    },
    'home2': {
      id: '243',
      text: 'The recommended',
      slug: 'home-2',
      params: {
        'order': 'DESC',
      }
    },
    'home3': {
      id: '244',
      text: 'Discover something new',
      slug: 'home-3',
      params: {
        'order': 'DESC',
      }
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
      text: 'Discover something new',
      slug: 'to-discover',
      params: {
        'order': 'DESC',
      }
    },
    'activities': {
      id: '146',
      text: 'Talks and workshops',
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
    'museums': {
      id: '144',
      text: 'Museums and foundations',
      slug: 'museums-and-foundations',
      params: { 
         'order': 'DESC',
         'exclude': '124' //activity
      }
    },
    // 'artcenters': {
    //   id: '141',
    //   text: 'Art Centers',
    //   slug: 'art-centers',
    //   params: { 
    //      'order': 'DESC',
    //      'exclude': '124' //activity
    //   }
    // },
    'galeries': {
      id: '113',
      text: 'Galleries',
      slug: 'galeries',
      params: { 
         'order': 'DESC',
         'exclude': '124' //activity
      }
    },
    'spaces': {
      id: '119',
      text: 'Alternative spaces',
      slug: 'alternative-spaces',
      params: { 
         'order': 'DESC',
         'exclude': '124' //activity
      }
    },
    'festivals': {
      id: '142',
      text: 'Fairs and festivals',
      slug: 'fairs-and-festivals',
      params: { 
         'order': 'DESC',
         'exclude': '124' //activity
      }
    },
    'blueproject': {
      id: '155',
      text: 'Blueproject Foundation',
      slug: 'blueproject-foundation',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'blueprojectactivities': {
      id: '155',
      text: 'Blueproject Foundation',
      slug: 'blueproject-foundation',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'santamonica': {
      id: '180',
      text: 'Arts Santa Mónica',
      slug: 'arts-santa-monica-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'santamonicaactivities': {
      id: '180',
      text: 'Arts Santa Mónica',
      slug: 'arts-santa-monica-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'caixaforum': {
      id: '182',
      text: 'CaixaForum',
      slug: 'caixaforum-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'caixaforumactivities': {
      id: '182',
      text: 'CaixaForum',
      slug: 'caixaforum-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'cccb': {
      id: '181',
      text: 'CCCB',
      slug: 'cccb-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'cccbactivities': {
      id: '181',
      text: 'CCCB',
      slug: 'cccb-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'lavirreina': {
      id: '184',
      text: 'La Virreina Centre de la Imatge',
      slug: 'la-virreina-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'lavirreinaactivities': {
      id: '184',
      text: 'La Virreina Centre de la Imatge',
      slug: 'la-virreina-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'espaivolart': {
      id: '167',
      text: 'Espais Volart',
      slug: 'espai-volart-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'espaivolartactivities': {
      id: '167',
      text: 'Espais Volart',
      slug: 'espai-volart-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'lapedrera': {
      id: '169',
      text: 'La Pedrera',
      slug: 'la-pedrera-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'lapedreraactivities': {
      id: '169',
      text: 'La Pedrera',
      slug: 'la-pedrera-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'fotocolectania': {
      id: '156',
      text: 'Fundació Foto Colectania',
      slug: 'fundacio-foto-colectania-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'fotocolectaniaactivities': {
      id: '156',
      text: 'Fundació Foto Colectania',
      slug: 'fundacio-foto-colectania-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'tapies': {
      id: '158',
      text: 'Fundació Antoni Tàpies',
      slug: 'fundacion-antoni-tapies-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'tapiesactivities': {
      id: '158',
      text: 'Fundació Antoni Tàpies',
      slug: 'fundacion-antoni-tapies-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'miro': {
      id: '159',
      text: 'Fundació Joan Miró',
      slug: 'fundacion-joan-miro-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'miroactivities': {
      id: '159',
      text: 'Fundació Joan Miró',
      slug: 'fundacion-joan-miro-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'mapfre': {
      id: '160',
      text: 'Fundación MAPFRE',
      slug: 'fundacion-mapfre-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'mapfreactivities': {
      id: '160',
      text: 'Fundación MAPFRE',
      slug: 'fundacion-mapfre-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'sunol': {
      id: '161',
      text: 'Fundació Suñol',
      slug: 'fundacion-sunol-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'sunolactivities': {
      id: '161',
      text: 'Fundació Suñol',
      slug: 'fundacion-sunol-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'macba': {
      id: '162',
      text: 'MACBA',
      slug: 'macba-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'macbaactivities': {
      id: '162',
      text: 'MACBA',
      slug: 'macba-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'meam': {
      id: '196',
      text: 'MEAM',
      slug: 'meam-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'meamactivities': {
      id: '196',
      text: 'MEAM',
      slug: 'meam-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'mnac': {
      id: '163',
      text: 'MNAC',
      slug: 'mnac-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'mnacactivities': {
      id: '163',
      text: 'MNAC',
      slug: 'mnac-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'canframis': {
      id: '164',
      text: 'Museu Can Framis',
      slug: 'museo-can-framis-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'canframisactivities': {
      id: '164',
      text: 'Museu Can Framis',
      slug: 'museo-can-framis-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'picasso': {
      id: '194',
      text: 'Museu Picasso',
      slug: 'museo-picasso-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'picassoactivities': {
      id: '194',
      text: 'Museu Picasso',
      slug: 'museo-picasso-en',
      params: { 
         'order': 'DESC',
         'exclude': '112' //expo
      }
    },
    'disseny': {
      id: '165',
      text: 'Museu del Disseny',
      slug: 'museu-del-disseny-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },
    'dissenyactivities': {
      id: '165',
      text: 'Museu del Disseny',
      slug: 'museu-del-disseny-en',
      params: { 
         'order': 'DESC',
         'overlap': '112' //expo
      }
    },

    ////////////empty category test//////
    // 'test': {
    //   id: '700',
    //   text: 'Test',
    //   slug: 'test',
    //   params: { 
    //      'order': 'DESC',
    //   }
    // },
    
  },
}

export default Constants;