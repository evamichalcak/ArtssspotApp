import React from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text } from 'react-native';
import EventsList from './EventsList';
import { fetchEvents, toggleEvent } from '../actions';
import { getVisibleEvents, getIsFetching, getErrorMessage, toggleUniqueEvent, getEventOpen } from '../reducers';
import FetchError from './FetchError';
import Constants from "../config/constants";

class VisibleEventsList extends React.Component {

  loadingData = true;

  fetchData() {
    let cat = Constants.CATS[this.props.filter].id;
    let params = Constants.CATS[this.props.filter].params;
    this.props.fetchEvents(cat, params, this.props.filter);
  }

  componentDidMount() {
      this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
    this.loadingData = (this.props.filter !== prevProps.filter);
  }

  render() {
    if (this.props.isFetching && !this.props.events.length) {
      return <Text>Loading...</Text>;
    }
    if (this.props.isFetching && this.loadingData) {
      return (
        <View>
          <Text>Loading...</Text>
          <EventsList {...this.props} />
        </View>
      );
    }
    if (this.props.errorMessage && !this.props.events.length) {
      return (
        <FetchError
          message={this.props.errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }
    if (!this.props.isFetching && !this.props.events.length) {
      return <Text>Sorry, no events available at this time</Text>;
    }
    return <EventsList {...this.props} />;
  }
}

const mapStateToVisibleEventsListProps = (state, ownProps) => {
  const filter=ownProps.filter;
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => (r1 !== r2)});
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
  {fetchEvents} //, getEventOpen }
)(VisibleEventsList);

export default VisibleEventsList;