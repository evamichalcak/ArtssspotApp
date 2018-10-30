import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { getIsFetching, getIsFetchingAny } from '../reducers';
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
      <View style={styles.HeaderContainer}>
        <View style={styles.categoryContainer}>
          <Image source={require('../../assets/img/dot_white.svg')} style={{width: 20, height: 20}}/>
        </View>
        <Text style={styles.category}>{Constants.CATS[this.props.navigation.getParam('cat', 'home')].text}</Text>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>Barcelona</Text>
        </View>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={{paddingBottom: 10, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderBottomColor: 'blue'}}>
        <Header />
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={{paddingBottom: 10, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderBottomColor: 'blue'}}>
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

const mapStateToProps = (state, filter) => {
  return {
    isFetching: getIsFetchingAny(state)
  };
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#f9ccb7',
    flexDirection: 'row',
    minHeight: 60,
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 15,
    width: '65%',
  },
  category: {
    color: '#f30a02',
  },
  cityContainer: {
    backgroundColor: '#f30a02',
    flex: 0,
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 15,
    width: '35%',
  },
  city: {
    color: 'white',
    textAlign: 'center',
  },
});





// const styles = StyleSheet.create({
//   headerContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     //backgroundColor: '#f9ccb7',
//   },
//   page: {
//     //color: 'white',
//   },
//   cityContainer: {
//     backgroundColor: '#f30a02',
//   }
//   city: {
//     //color: 'white',
//   },
// });

export default withNavigation(connect(mapStateToProps)(AccordionHeader));