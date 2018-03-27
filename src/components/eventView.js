import React, { Component } from 'react';
import { StyleSheet, 
         Text, 
         Image,
         View,
         ListView,
         ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { decode } from 'he';
import { cleanText } from '../helpers';

import { fetchEvents } from "../actions/eventsActions"
//import { fetchUser } from "../actions/userActions"

@connect((store) => {
  return {
    //events: store.events.eventsData,
    fetching: store.events.fetching,
    dataSource: dataSource.cloneWithRows(store.events.eventsData),
    eventsData: store.events.eventsData,
    firstDate: store.events.firstDate,
    lastDate: store.events.lastDate,
    viewing: store.events.viewing,
  };
})

export default class EventView extends Component {

  componentWillMount() {
    this.props.dispatch(fetchEvents(this.props.firstDate, this.props.lastDate));
  }

  render() {
    const { events, fetching } = this.props;

    if (fetching) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (

      <View style={{flex: 1, paddingTop: 20}}>
        <Text>Hello World! ---- {this.props.lastDate}</Text>
        <ListView
          enableEmptySections={true}
          dataSource={this.props.dataSource}
          renderRow={(rowData) => <View>
              <Image source={{uri:rowData.eventImage}} style={{width: 193, height: 110}} />
              <Text>{decode(rowData.eventTitle)}</Text> 
              <Text>{new Date(rowData.eventStart.replace(/ /g, "T")).toLocaleDateString()} - {new Date(rowData.eventEnd.replace(/ /g, "T")).toLocaleDateString()}</Text> 
              <Text>{decode(rowData.eventVenue)}</Text>
              <Text style={styles.descriptionClosed}>{cleanText(rowData.eventSummary)}</Text>
            </View>}
        />
      </View>
    );
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionClosed: {
    height: 0
  },
});