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
    categoryIndex: false,
    toToggle: false
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

  // toggleEvent(eventId, callback) {
  //   console.log('eventId', eventId);
  //   console.log('callback', callback);
  //   if (this.state.toToggle !== false) {
  //     if (eventId === this.state.categoryIndex) {
  //       this.setState({ toToggle: false }); 
  //     } else {
  //       this.state.toToggle();
  //       this.setState({ toToggle: callback }); 
  //     }
  //   }
  //   this.setState({ categoryIndex: eventId }); 
  //   callback();
  // }

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
            //completed={rowData.completed} 
            text={rowData.text} 
            title={rowData.eventTitle}
            image={rowData.eventImage}
            start={rowData.EventStartDate}
            end={rowData.EventEndDate}
            venue={rowData.eventVenueName}
            address={rowData.eventVenueAddress}
            summary={rowData.eventExcerpt}
            id={rowData.id}
            onClick={() => this.props.onEventClick(rowData.id)}
            open={rowData.open || false} 
            //open={this.props.getEventOpen()}
            //categoryIndex={this.state.categoryIndex}
            //open = {this.state.categoryIndex == rowData.id && this.state.showSubcategory}
            textOnly = {this.props.textOnly}
          ><Text>{rowData.eventExcerpt}</Text><Text>---{rowData.open}---</Text></Event>
        </View>
        }
      />
    ); 
  }
}

export default EventsList;