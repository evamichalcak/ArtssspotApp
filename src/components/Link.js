import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class Link extends React.Component {
  render() {
    if  (this.props.active) {
      return ( 
        <View {...this.props}>
          <Text style={{fontWeight: 'bold'}}>{this.props.children}</Text>
        </View>
      );
    }
    return (
      <TouchableHighlight {...this.props} onPress={() => {this.props.onClick();}}>
        {this.props.children}
      </TouchableHighlight>
    );
  }
}