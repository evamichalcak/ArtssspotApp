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
import Header from './Header';


export default class ArtssspotApp extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <Header />

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
