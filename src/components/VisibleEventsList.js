import React from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text } from 'react-native';
import EventsList from './EventsList';
import { Small } from './Typography';
import { fetchEvents } from '../actions';
import { getVisibleEvents, getIsFetching, getErrorMessage, toggleUniqueEvent, getEventOpen } from '../reducers';
import FetchError from './FetchError';
import Constants from "../config/constants";

class VisibleEventsList extends React.Component {

  loadingData = true;

  fetchData() {
    console.log(this.props.filter);
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
      return <Text style={{textAlign: 'center'}}>Loading...</Text>;
    }
    if (this.props.isFetching && this.loadingData) {
      return (
        <View>
          <Small style={{marginBottom: 10, textAlign: 'center'}}>Loading...</Small>
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
      return <Small style={{marginBottom: 10, textAlign: 'center'}}>No events available at this time</Small>;
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