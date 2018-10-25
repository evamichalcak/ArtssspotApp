import React from 'react';
import { Text, View, ListView } from 'react-native';
import Event from './Event';

class EventsList extends React.Component {

  state = {
    showSubcategory: false,
    categoryIndex: false
  }

  updateIndex(index) {
    console.log('index------', index);
    console.log('showSubcategory------', this.state.showSubcategory);
    console.log('categoryIndex------', this.state.categoryIndex);
      if (this.state.showSubcategory && this.state.categoryIndex == index) {
          this.setState({
              showSubcategory: !this.state.showSubcategory,
              categoryIndex: false
          });
          console.log('setState was called');
      } else {
          this.setState({
              showSubcategory: true,
              categoryIndex: index
          });
          console.log('setState was called');
      }

  }

  render() {
    return (
      <ListView
      dataSource={this.props.dataSource}
      renderRow={(rowData) => 
        <View style={{ flex: 1, flexDirection: "column" }}>
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
            id={rowData.id}
            onClick={() => this.updateIndex(rowData.id)} 
            categoryIndex = {this.state.categoryIndex}
            textOnly = {this.props.textOnly}
          />
        </View>
        }
      />
    ); 
  }
}

export default EventsList;