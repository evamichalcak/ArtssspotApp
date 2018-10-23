import React from 'react';
import { StyleSheet, View } from 'react-native';
import VisibleEventsList from './VisibleEventsList';

export default class CategoryScreen extends React.Component {
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
