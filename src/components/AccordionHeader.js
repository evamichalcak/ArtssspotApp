import React from 'react';
import { Text, View } from 'react-native';
import { getIsFetching } from '../reducers';
import { connect } from 'react-redux';
import Header from './Header';
import Accordion from 'react-native-collapsible/Accordion';
import Constants from "../config/constants";
import { withNavigation } from 'react-navigation';


const SECTIONS = [
  {
    title: 'Menu',
  }
];

class AccordionHeader extends React.Component {

  componentWillUpdate() {
    if (this.props.isFetching) {
      this.setState({
        ...this.state,
        activeSections: []
      });
    }
  }

  state = {
    activeSections: []
  };

  _renderHeader = section => {
    return (
      <View>
        <Text>Artssspot</Text>
        <Text>{Constants.CATS[this.props.navigation.getParam('cat', 'home')].text}</Text>
        <Text>Barcelona</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View>
        <Header />
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Accordion
          sections={SECTIONS}
          activeSections={(this.props.isFetching)? [] : this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: getIsFetching(state)
  };
}

export default withNavigation(connect(mapStateToProps)(AccordionHeader));