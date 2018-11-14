import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class Link extends React.Component {
  render() {
    if  (this.props.active) {
      return ( 
        <View style={this.props.itemstyle}>
          <Text style={{fontWeight: 'bold'}}>{this.props.children}</Text>
        </View>
      );
    }
    return (
      <TouchableHighlight onPress={() => {this.props.onClick()}} style={this.props.itemstyle}  underlayColor={'#E90901'}>
        {this.props.children}
      </TouchableHighlight>
    );
  }
}