import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ArtssspotApp from './ArtssspotApp';
import { ScrollView, Button, View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, createStackNavigator, NavigationActions, DrawerActions, DrawerItems, SafeAreaView } from 'react-navigation';
import Header from './Header';


class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>    
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Artssspot')}
        />
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
    },
    Artssspot: {
        screen: ArtssspotApp,
    },
  },
  {
    initialRouteName: 'Home',
  }
);


export default class Root extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
		        <RootStack />
		    </Provider>
		);
	} 
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  test1: {
  	backgroundColor: '#f00',
  }, 
  test2: {
  	backgroundColor: '#00f',
  }

});