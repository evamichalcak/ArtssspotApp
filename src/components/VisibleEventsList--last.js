import React from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import EventsList from './EventsList';
import { fetchEvents, toggleEvent } from '../actions';
import { getVisibleEvents, getIsFetching, getErrorMessage } from '../reducers';
import FetchError from './FetchError';
import Constants from "../config/constants";

class VisibleEventsList extends React.Component {

  fetchData() {
    console.log('fetchdata in visibleeventslist: ', this.props.filter);
    let cat = Constants.CATS[this.props.filter].id;
    console.log('cat in visibleeventslist: ', cat);
    let params = Constants.CATS[this.props.filter].params;
    console.log('params in visibleeventslist: ', params);
    this.props.fetchEvents(cat, params, this.props.filter);
  }

  componentDidMount() {
    console.log('fetchData, didMount: ', this.props.filter);
      this.fetchData();
  }

  componentDidUpdate(prevProps) {
      console.log('before DidUpdate if');
      console.log('prev filter', prevProps.filter);
      console.log('new props filter', this.props.filter);
    if (this.props.filter !== prevProps.filter) {
      console.log('inside DidUpdate if');
      this.fetchData();
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

const mapStateToVisibleEventsListProps = (state, ownProps) => {
  const filter=ownProps.filter;
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let dataSource = ds.cloneWithRows(getVisibleEvents(state));
  return {
    events: getVisibleEvents(state),
    filter,
    dataSource,
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state)
  };
};

VisibleEventsList = connect(
  mapStateToVisibleEventsListProps,
  { onEventClick: toggleEvent, fetchEvents }
)(VisibleEventsList);

export default VisibleEventsList;