import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VisibleEventsList from './VisibleEventsList';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', minHeight: '100%'}}>
        <Text>The unmissables</Text>
        <VisibleEventsList filter='home1' />

      </View>
    );
  }
}

