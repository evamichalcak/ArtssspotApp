import React from 'react';
import { ListView } from 'react-native';
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
            onClick={() => {this.props.onEventClick(rowData.id)}} 
          />
        }
      />
    );
  }
}

export default EventsList;