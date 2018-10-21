import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import AccordionHeader from './AccordionHeader';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <AccordionHeader />,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>    
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Category')}
        />
      </View>
    );
  }
}