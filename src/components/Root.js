import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ArtssspotApp from './ArtssspotApp';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Header from './Header';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Header />
        <Button
          title="Go to Artssspot"
          onPress={() => this.props.navigation.navigate('Artssspot')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Artssspot: ArtssspotApp,
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