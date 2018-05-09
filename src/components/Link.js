import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default class Link extends React.Component {
  render() {
    if  (this.props.active) {
      return <Text style={{fontWeight: 'bold'}}>{this.props.text}</Text>;
    }
    return (
      <TouchableHighlight onPress={() => {this.props.onClick()}}>
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}