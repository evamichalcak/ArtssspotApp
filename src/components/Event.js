import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import { decode } from 'he';
import { cleanText, cleanDate } from '../helpers';

class Event extends React.Component {
  render() {
    if (this.props.textOnly === true) {
      return (
        <TouchableHighlight onPress={this.props.onClick}>
          <View>        
            <Text>{decode(this.props.title)}</Text> 
            <Text>{cleanDate(this.props.start)} - {cleanDate(this.props.end)}</Text> 
            <Text>{decode(this.props.venue)}</Text>
            <Text>{decode(this.props.address)}</Text>
            <Text style={styles.descriptionClosed}>{cleanText(this.props.summary)}</Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight onPress={this.props.onClick}>
          <View>        
            <Image source={{uri:this.props.image}} style={{width: 193, height: 110}} />
            <Text>{decode(this.props.title)}</Text> 
            <Text>{cleanDate(this.props.start)} - {cleanDate(this.props.end)}</Text> 
            <Text>{decode(this.props.venue)}</Text>
            <Text>{decode(this.props.address)}</Text>
            <Text style={styles.descriptionClosed}>{cleanText(this.props.summary)}</Text>
          </View>
        </TouchableHighlight>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionClosed: {
    height: 0
  },
});

export default Event;