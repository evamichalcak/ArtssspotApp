import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import ExpandView from './ExpandView';
import { decode } from 'he';
import { cleanText, cleanDate } from '../helpers';

class Event extends React.Component {

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
                      <ExpandView>
                            <Text>{cleanText(this.props.summary)}</Text>
                          <Text> Less</Text>
                      </ExpandView>
                  }
                  {!this.props.open &&
                      <View>
                          <Text> More</Text>
                      </View>
                  }
              </View>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionClosed: {
    height: 0
  },
  container   : {
      height: 0,
      backgroundColor: '#fff',
      margin:10,

  },
  titleContainer : {
      flexDirection: 'row'
  },
  title       : {
      flex    : 1,
      padding : 10,
      color   :'#2a2f43',
      fontWeight:'bold'
  },
  button      : {

  },
  buttonImage : {
      fontSize   : 30
  },
  body        : {
      padding     : 10,
      paddingTop  : 0,
  }
});

export default Event;