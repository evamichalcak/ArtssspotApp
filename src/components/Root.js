import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import AccordionHeader from './AccordionHeader';
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
    navigationOptions: {
      header: props => <AccordionHeader />,
      headerStyle: {
        backgroundColor: "transparent"
      }
    },
    animationEnabled: true
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