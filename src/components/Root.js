import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import Header from './Header';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';

const RootStack = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
    },
    Category: {
        screen: CategoryScreen,
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