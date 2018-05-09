import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import EventsList from './EventsList';
import { toggleEvent } from '../actions';
import { getVisibleEvents } from '../reducers';


const mapStateToEventsListProps = (state) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let dataSource = ds.cloneWithRows(getVisibleEvents(state, state.visibilityFilter));
  return {
    events: getVisibleEvents(
      state.events,
      state.visibilityFilter,
    ),
    dataSource
  };
};

const VisibleEventsList = connect(
  mapStateToEventsListProps,
  { onEventClick: toggleEvent }
)(EventsList);

export default VisibleEventsList;