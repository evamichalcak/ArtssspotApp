import React from 'react';
import { Text, ListView } from 'react-native';
import Event from './Event';

class EventsList extends React.Component {
  render() {
    if (this.props.dataSource.getRowCount()) {
      return (
        <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData) => 
            <Event 
              completed={rowData.completed} 
              text={rowData.text} 
              title={rowData.eventTitle}
              image={rowData.eventImage}
              start={rowData.EventStartDate}
              end={rowData.EventEndDate}
              venue={rowData.eventVenueName}
              address={rowData.eventVenueAddress}
              summary={rowData.eventExcerpt}
              onClick={() => {this.props.onEventClick(rowData.id)}} 
            />
          }
        />
      );
    } else {
      return <Text>Sorry, no events available at this time</Text>;
    }
  }
}

export default EventsList;