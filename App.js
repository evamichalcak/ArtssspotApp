import React, { Component } from 'react';
import configureStore from './src/config/configureStore';
import Root from './src/components/Root';

const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Root store={store} />
        );
    }
}