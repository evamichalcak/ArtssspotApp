import React from 'react';
import { Text, View, ListView } from 'react-native';
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
      />
    ); 
  }
}

export default EventsList;