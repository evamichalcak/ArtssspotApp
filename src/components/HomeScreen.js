import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import VisibleEventsList from './VisibleEventsList';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} >
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
        <Text>Talks and workshops ---2</Text>
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
  },
  subcontainer: {
    flex: 0,
  }
});
