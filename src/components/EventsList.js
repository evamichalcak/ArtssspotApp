import React from 'react';
import { Text, ListView } from 'react-native';
import Event from './Event';

class EventsList extends React.Component {
  render() {
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
  }
}

export default EventsList;