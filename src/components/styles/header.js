import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  firstitem: {
  	backgroundColor: '#f30a02',
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  item: {
  	backgroundColor: '#f30a02',
    borderTopWidth: StyleSheet.hairlineWidth,
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
  collapsible: {
  	flexDirection: 'row',
  	paddingLeft: 2,
  },
  section: {
  	fontStyle: 'italic',
  },
  icon: {
  	textAlignVertical: 'center',
  	marginTop: 2,
  	marginRight: 8,
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
  text: {
    color: 'white',
    fontFamily:  Platform.OS === 'ios' ? 'Avenir Next Condensed' : 'sans-serif-condensed',
    fontSize: 18,
  },
  submenu: {
  	flexGrow: 1,
  	paddingLeft: 22,
  },
  submenuscroll: {
  	flex: -1,
    justifyContent: 'space-between',
    minHeight: Dimensions.get('window').height,
  }
});

export default styles;