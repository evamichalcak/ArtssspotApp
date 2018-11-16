import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import VisibleEventsList from './VisibleEventsList';
import * as Typo from './Typography';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} >
        <Typo.H3 style={styles.header}>The unmissables</Typo.H3>
        <View style={styles.subcontainer}>
          <VisibleEventsList filter='home1' />
        </View>
        <Typo.H3 style={styles.header}>The recommended</Typo.H3>
        <View style={styles.subcontainer}>
          <VisibleEventsList filter='home2' style={styles.subcontainer} />
        </View>
        <Typo.H3 style={styles.header}>Talks and workshops</Typo.H3>
        <View style={styles.subcontainer}>
          <VisibleEventsList filter='activities' textOnly={true} style={styles.subcontainer} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').height,
    paddingLeft: 7,
    paddingRight: 7,
  },
  header: {
    textAlign: 'center',
    margin: 20,
    marginTop: 30,
  },
  subcontainer: {
    flex: 0,
  }
});
