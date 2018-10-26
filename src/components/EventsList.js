import React from 'react';
import { Text, View, ListView } from 'react-native';
import Event from './Event';

class EventsList extends React.Component {

  // componentWillUpdate() {
  //   console.log('componentWillUpdate EventsList');
  // }

  state = {
    ...this.state,
    //stateName: this.props.filter,
    showSubcategory: false,
    categoryIndex: false
  };

  eventRefs = [];

  updateIndex(index) {
    //console.log('index------', index);
      if (this.state.showSubcategory && this.state.categoryIndex == index) {
          this.setState({
              showSubcategory: !this.state.showSubcategory,
              categoryIndex: false
          });
          //console.log('setState was called', this.props.filter);
      } else {
          this.setState({
              showSubcategory: true,
              categoryIndex: index
          });
          //console.log('setState was called', this.props.filter);
      }

  }

  // _toggleExpanded(id) {
  //   console.log('------', id);
  //   this.eventRefs[id].setNativeProps({open: false});
  //   console.log(this.eventRefs[id]);
  // }

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
            //categoryIndex={this.state.categoryIndex}
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