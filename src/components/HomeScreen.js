import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import VisibleEventsList from './VisibleEventsList';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>The unmissables</Text>
        <View style={styles.subcontainer}>
          <VisibleEventsList filter='home1' />
        </View>
        <Text>The recommended</Text>
        <View style={styles.subcontainer}>
          <VisibleEventsList filter='home2' style={styles.subcontainer} />
        </View>
        <Text>Talks and workshops</Text>
        <View style={styles.subcontainer}>
          <VisibleEventsList filter='activities' textOnly={true} style={styles.subcontainer} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Dimensions.get('window').height,
  },
  subcontainer: {
    flex: 1,
  }
});
