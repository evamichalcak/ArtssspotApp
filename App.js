import React, { Component } from 'react';
//import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store'; //Import the store
import EventView from './src/components/eventView' //Import the component file
//import FilterPicker from './src/components/filterPicker' //Import the component file

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
	            <EventView />
            </Provider>
        );
    }
}