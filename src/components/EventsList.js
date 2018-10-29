import React from 'react';
import { Text, View, ListView } from 'react-native';
import Event from './Event';

class EventsList extends React.Component {

  state = {
    ...this.state,
    showSubcategory: false,
    categoryIndex: false,
  };

  updateIndex(index) {
      if (this.state.showSubcategory && this.state.categoryIndex == index) {
          this.setState({
              showSubcategory: !this.state.showSubcategory,
              categoryIndex: false
          });
      } else {
          this.setState({
              showSubcategory: true,
              categoryIndex: index
          });
      }

  }

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
            summary={rowData.eventExcerpt}
            id={rowData.id}
            onClick={() => this.updateIndex(rowData.id)}
            open = {this.state.categoryIndex == rowData.id && this.state.showSubcategory}
            textOnly = {this.props.textOnly}
          />
        </View>
        }
      />
    ); 
  }
}

export default EventsList;