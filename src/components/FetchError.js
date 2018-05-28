import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';


export default class FetchError extends React.Component {
  render() {
    return (
    <View>
      <Text>{this.props.message}</Text>
      <TouchableHighlight onPress={() => {this.props.onRetry()}}>
        <Text>Retry</Text>
      </TouchableHighlight>
    </View>
    );
  }
}
