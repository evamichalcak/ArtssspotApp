import React from 'react';
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  firstitem: {
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  item: {
    borderTopWidth: 0.2,
    borderTopColor: 'white',
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  container: {
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  text: {
    color: 'white',
    fontFamily:  Platform.OS === 'ios' ? 'Avenir Next Condensed' : 'sans-serif-condensed',
    fontSize: 18,
  },
  textactive: {
    color: 'white',
    fontFamily:  Platform.OS === 'ios' ? 'Avenir Next Condensed' : 'sans-serif-condensed',
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});

export default styles;