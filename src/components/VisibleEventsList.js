import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import EventsList from './EventsList';
import { fetchEvents, toggleEvent } from '../actions';
import { getVisibleEvents, getVisibilityFilter } from '../reducers';

class VisibleEventsList extends React.Component {

  fetchData() {
    fetchEvents(this.props.filter);
  }

  componentDidMount() {
      this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  render() {
    return <EventsList {...this.props} />;
  }
}

const mapStateToVisibleEventsListProps = (state) => {
  const filter = getVisibilityFilter(state);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let dataSource = ds.cloneWithRows(getVisibleEvents(state, filter));
  return {
    events: getVisibleEvents(state, filter),
    filter,
    dataSource,
  };
};

VisibleEventsList = connect(
  mapStateToVisibleEventsListProps,
  { onEventClick: toggleEvent, fetchEvents }
)(VisibleEventsList);

export default VisibleEventsList;