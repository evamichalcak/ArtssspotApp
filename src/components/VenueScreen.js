import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import VisibleEventsList from './VisibleEventsList';
import * as Typo from './Typography';


export default class VenueScreen extends React.Component {
  filter=this.props.navigation.getParam('cat', 'all');
  render() {
    return (
      <ScrollView style={styles.container} >
        <Typo.H3 style={styles.header}>Exhibitions</Typo.H3>
        <View style={styles.subcontainer}>
          <VisibleEventsList filter={this.filter} params={{'order': 'DESC', 'overlap': '112'}} />
        </View>
        <Typo.H3 style={styles.header}>Other events</Typo.H3>
        <View style={styles.subcontainer}>
          <VisibleEventsList filter={this.filter + 'activities'} textOnly={true} style={styles.subcontainer} />
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
