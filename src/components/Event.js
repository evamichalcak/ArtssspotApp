import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { decode } from 'he';
import { cleanText, cleanDate } from '../helpers';

const SECTIONS = [
  {
    title: 'Menu',
  }
];

class Event extends React.Component {

  shouldComponentUpdate(nextProps) {
    //console.log('sssssssssssssssshouldComponentUpdate',nextProps.open !== this.props.open);
      //return this.props.id === (nextProps.categoryIndex || this.props.categoryIndex);
      return nextProps.open !== this.props.open;
    }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}> 
          <View style={{ flex: 1, flexDirection: "column", alignItems: "flex-start", justifyContent: "center", marginBottom: 0 }}>
              {!(this.props.textOnly === true) &&
                <Image source={{uri:this.props.image}} style={{width: 193, height: 110}} />
              }
              <Text style={{ fontSize: 16 }}>
                  {decode(this.props.title)}
              </Text>
              <Text>{cleanDate(this.props.start)} - {cleanDate(this.props.end)}</Text> 
              <Text>{decode(this.props.venue)}</Text>
              <Text>{decode(this.props.address)}</Text>

          </View>
          <TouchableHighlight
              onPress={this.props.onClick}>
              <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 5 }}>

                  {this.props.open &&
                      <View>
                          <Text>{cleanText(this.props.summary)}</Text>
                          <Text> Less</Text>
                          {console.log('categoryIndex in less', this.props.open)}
                      </View>
                  }
                  {!this.props.open &&
                      <View>
                          <Text> More</Text>
                          {console.log('categoryIndex in more', this.props.open)}
                      </View>
                  }
              </View>
          </TouchableHighlight>
      </View>
    );
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