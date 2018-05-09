import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

class Event extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onClick}>
        <Text style={{
          textDecorationLine: this.props.completed ? 'line-through' : 'none', 
          textDecorationStyle: 'solid'
        }}>{this.props.text} + {this.props.completed + ''}</Text>
      </TouchableHighlight>
    );
  }
}

export default Event;