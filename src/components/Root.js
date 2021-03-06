import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AccordionHeader from './AccordionHeader';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import VenueScreen from './VenueScreen';
import { Font } from 'expo';

const RootStack = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
    },
    Category: {
        screen: CategoryScreen,
    },
    Venue: {
        screen: VenueScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: props => <AccordionHeader />,
    },
    animationEnabled: true
  }
);


export default class Root extends Component {

  state = {
    fontLoaded: false,
  };

   async componentDidMount() {
      await Font.loadAsync({
        'NewsCycle': require('../../assets/fonts/NewsCycle-Regular.ttf'),
        'Artssspot': require('../../assets/fonts/Artssspot.ttf'),
      });
      this.setState({ fontLoaded: true });
   }

    render() {

    return (
      <Provider store={this.props.store}>
        {
          this.state.fontLoaded ? (
            <RootStack />
          ) : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f30a02'}}><Text style={{color: '#fff', fontSize: 14}}>
              Loading...
            </Text></View>
        } 
      </Provider>
    );
  } 
};