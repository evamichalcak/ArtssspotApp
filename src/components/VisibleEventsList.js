import React from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import EventsList from './EventsList';
import { fetchEvents, toggleEvent } from '../actions';
import { getVisibleEvents, getVisibilityFilter, getIsFetching, getErrorMessage } from '../reducers';
import FetchError from './FetchError';

class VisibleEventsList extends React.Component {

  fetchData() {
    console.log('fetchData');
    this.props.fetchEvents(this.props.filter);
  }

  componentDidMount() {
      this.fetchData();
  }

  componentDidUpdate(prevProps) {
    // console.log(JSON.stringify(prevProps.state), 'componentDidUpdate of VisibleEventsList');
    if (this.props.filter !== prevProps.filter) {
      this.props.fetchEvents(this.props.filter);
    }
    
  }

  render() {
    if (this.props.isFetching && !this.props.events.length) {
      return <Text>Loading...</Text>;
    }
    if (this.props.errorMessage && !this.props.events.length) {
      return (
        <FetchError
          message={this.props.errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }
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
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter)
  };
};

VisibleEventsList = connect(
  mapStateToVisibleEventsListProps,
  { onEventClick: toggleEvent, fetchEvents }
)(VisibleEventsList);

export default VisibleEventsList;