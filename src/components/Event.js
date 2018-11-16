import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, Dimensions } from 'react-native';
import OpenURLButton from './OpenURLButton';
import { decode } from 'he';
import { cleanText, cleanDate } from '../helpers';
import * as Typo from './Typography';

class Event extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}> 
          <View style={{ flex: 1, flexDirection: "column", alignItems: "flex-start", justifyContent: "center", marginBottom: 0 }}>
              {!(this.props.textOnly === true) &&
                <Image source={{uri:this.props.image}} style={styles.image} /> 
              } 
              {!(this.props.textOnly === true) &&
                <Typo.H1 style={styles.title}>{decode(this.props.title)}</Typo.H1>
              } 
              {(this.props.textOnly === true) &&
                <Typo.H4 style={styles.title}>{decode(this.props.title)}</Typo.H4>
              }
              <Typo.P style={styles.info}>{cleanDate(this.props.start)} - {cleanDate(this.props.end)}</Typo.P> 
              <Typo.Strong>{decode(this.props.venue)}</Typo.Strong>
              <Typo.P style={styles.info}>{decode(this.props.address)}</Typo.P>

          </View>
          <OpenURLButton
              url={this.props.link} style={styles.button} underlayColor={'#5d09ab'}>
                          <Typo.P style={styles.buttonText}>Read more</Typo.P>
          </OpenURLButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container   : {
      height: 0,
      backgroundColor: '#fff',
      margin:10,

  },
  button: {
    backgroundColor: '#7210d0',
    borderRadius: 2,
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 180,
    borderRadius: 2,
    marginBottom: 20,
  },
  title: {
    marginBottom: 7,
  },
  info: {
    marginBottom: 7,
  }
});

export default Event;