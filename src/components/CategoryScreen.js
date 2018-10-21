import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import EventsList from './EventsList';
import VisibleEventsList from './VisibleEventsList';
import AccordionHeader from './AccordionHeader';
import Constants from "../config/constants";



export default class CategoryScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <AccordionHeader />,
  };
  render() {
    return (
      <View style={styles.container}>

        <VisibleEventsList filter={this.props.navigation.getParam('cat', 'all')} />

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
  }
});
