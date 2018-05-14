import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import EventsList from './EventsList';
import { toggleEvent } from '../actions';
import { getVisibleEvents, getVisibilityFilter } from '../reducers';
import { fetchEvents2 } from "../api";

class VisibleEventsList extends React.Component {

  fetchData() {
    fetchEvents2(this.props.filter).then(events => console.log(this.props.filter, events));
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
  { onEventClick: toggleEvent }
)(VisibleEventsList);

export default VisibleEventsList;