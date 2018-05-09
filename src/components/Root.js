import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ArtssspotApp from './ArtssspotApp';

export default class Root extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
		        <ArtssspotApp />
		    </Provider>
		);
	} 
};