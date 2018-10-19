import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ArtssspotApp from './ArtssspotApp';
import configureStore from '../config/configureStore'

const store = configureStore();

const Root = ({ store }) => {
    <Provider store={store}>
        <ArtssspotApp />
    </Provider>
};

export default Root;