import React from 'react';
import { Text, View, ListView, StyleSheet } from 'react-native';
import Event from './Event';

class EventsList extends React.Component {

  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData) =>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Event 
              text={rowData.text} 
              title={rowData.eventTitle}
              image={rowData.eventImage}
              start={rowData.EventStartDate}
              end={rowData.EventEndDate}
              venue={rowData.eventVenueName}
              address={rowData.eventVenueAddress}
              link={rowData.eventLink}
              textOnly = {this.props.textOnly}
            />
          </View>
        }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
    ); 
  }
}

export default EventsList;

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
    marginTop: 30,
    marginBottom: 10,
  },
});