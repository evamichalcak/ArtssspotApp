import React from 'react';
import { StyleSheet, View } from 'react-native';
import VisibleEventsList from './VisibleEventsList';

export default class CategoryScreen extends React.Component {
  filter=this.props.navigation.getParam('cat', 'all');
  render() {
    return (
      <View style={styles.container}>

        <VisibleEventsList filter={this.filter} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 7,
    paddingTop: 20,
  }
});
