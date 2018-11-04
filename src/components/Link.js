import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default class Link extends React.Component {
  render() {
    if  (this.props.active) {
      return <Text style={this.props.style}><Text style={{fontWeight: 'bold'}}>{this.props.text}</Text></Text>;
    }
    return (
      <TouchableHighlight onPress={() => {this.props.onClick()}} style={this.props.style} >
        <Text style={this.props.style}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}