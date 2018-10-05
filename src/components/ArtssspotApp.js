// import React, { Component } from 'react';
// import EventView from './EventView';

// export default class ArtssspotApp extends Component {
//     render() {
//         return (
//             <EventView />
//         );
//     }
// }



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import EventsList from './EventsList';
import VisibleEventsList from './VisibleEventsList';
import { createStackNavigator } from 'react-navigation';
import Header from './Header';
import Constants from "../config/constants";



export default class ArtssspotApp extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };

  render() {
    return (
      <View style={styles.container}>

        <VisibleEventsList />

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
