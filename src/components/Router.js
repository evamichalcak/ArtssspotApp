import React, { Component } from 'react';
//import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AccordionHeader from './AccordionHeader';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import { Font } from 'expo';
import { fontLoader } from '../actions';

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


export default class Router extends Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
      await Font.loadAsync({
        'NewsCycle': require('../../assets/fonts/NewsCycle-Regular.ttf'),
      });
      //console.log('+++++', fontLoader());
      fontLoader();
      this.setState({ fontLoaded: true });
   }

	render() {
    fontLoader()
		return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          this.state.fontLoaded ? (<View>
            <Text style={{ fontFamily: 'NewsCycle', fontSize: 56 }}>
              Hello, world!
            </Text>
		        <RootStack /></View>
          ) : <Text>
              Loading
            </Text>
        }

            
      </View>

		);
	} 
};


Router = connect(
  {},
  {fontLoader}
)(Router);
