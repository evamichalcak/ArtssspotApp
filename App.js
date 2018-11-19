import React, { Component } from 'react';
import { StatusBar, View } from 'react-native'
import configureStore from './src/config/configureStore';
import Root from './src/components/Root';

const store = configureStore();

export default class App extends Component {
    render() {
        return (
        	<View style={{flex:1}}>
	        	<StatusBar backgroundColor="#f66a5c" animated />
	            <Root store={store} />
            </View>
        );
    }
}