import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VisibleEventsList from './VisibleEventsList';

export default class CategoryScreen extends React.Component {
  filter=this.props.navigation.getParam('cat', 'all');
  render() {
    return (
      <View style={styles.container}>

        <VisibleEventsList filter={this.filter} />
        <Text>----</Text>
        <VisibleEventsList filter='design' />

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
