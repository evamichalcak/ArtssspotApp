import React from 'react';
import { Text, Image, View, ScrollView, Animated, StyleSheet, Platform, Dimensions} from 'react-native';
import { getIsFetching, getIsFetchingAny } from '../reducers';
import { connect } from 'react-redux';
import Header from './Header';
import Accordion from 'react-native-collapsible/Accordion';
import Constants from "../config/constants";
import { withNavigation } from 'react-navigation';
import * as Typo from './Typography';
import IconLogo from './IconLogo';
import IconArrowDown from './IconArrowDown';

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
    activeSections: [],
    headerColorAni: new Animated.Value(0),
    logoColorAni: new Animated.Value(0),
  };

  _renderHeader = (section, index, isActive, sections) => {

    let { headerColorAni, logoColorAni } = this.state;
    const interpolateBackgroudColor = this.state.headerColorAni.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(249,204,183)', 'rgb(243,10,2)']
    })
    const interpolateColor = this.state.logoColorAni.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(243,10,2)', 'rgb(255,255,255)']
    })
    const animatedStyleHeader = {
      backgroundColor: interpolateBackgroudColor,
    }
    const animatedStyleLogo = {
      color: interpolateColor,
    }
    return (
      <View style={styles.HeaderContainer}>
        <Animated.View style={[styles.categoryContainer, animatedStyleHeader]}>
          <Animated.Text style={[styles.logo, animatedStyleLogo]}><IconLogo /></Animated.Text>
          <Text style={styles.category} numberOfLines={1} ellipsizeMode={'tail'}><Typo.P>{Constants.CATS[this.props.navigation.getParam('cat', 'home')].text}</Typo.P></Text>
          <IconArrowDown style={styles.categoryicon} />
        </Animated.View>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>Barcelona</Text>
        </View>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <ScrollView style={styles.BodyContainer} contentContainerStyle={styles.scroll}>
        <Header />
      </ScrollView>
    );
  };

  _updateSections = activeSections => {
    
    let animateTo = (activeSections.length > 0)? 150 : 0;

    Animated.timing(                  
      this.state.headerColorAni,           
      {
        toValue: animateTo,                  
        duration: 600,              
      }
    ).start();
    Animated.timing(                  
      this.state.logoColorAni,          
      {
        toValue: animateTo,          
        duration: 600,              
      }
    ).start();
    this.setState({ activeSections });
  };


  render() {
    return (
      <View style={styles.headerShadow}>
        <Accordion 
          sections={SECTIONS}
          activeSections={(this.props.isFetching)? [] : this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          underlayColor={'#660c00'}
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
  BodyContainer: {
    backgroundColor: '#f30a02',
    flexGrow: 1,
    minHeight: (Dimensions.get('window').height - 77),
  },
  HeaderContainer: {
    backgroundColor: '#f9ccb7',
    flexDirection: 'row',
    minHeight: 60,
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 7,
    paddingLeft: 7,
    paddingRight: 15,
    paddingTop: 30,
  },
  categoryContainerOpen: {
    backgroundColor: '#f30a02',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 7,
    paddingLeft: 7,
    paddingRight: 15,
    paddingTop: 30,
  },
  category: {
    color: '#f30a02',
    flex: 1,
    fontFamily: 'sans-serif-condensed',
    marginTop: 7,
  },
  categoryicon: {
    color: '#f30a02',
    flex: 0,
    fontSize: 20,
    marginLeft: 4,
    marginTop: 11,
    textAlign: 'right',
  },
  logo: {
    flex: 0,
    marginRight: 10,
    marginLeft: 2,
  },
  cityContainer: {
    backgroundColor: '#f30a02',
    flex: 0,
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 15,
    minWidth: '30%',
  },
  city: {
    color: 'white',
    textAlign: 'center',
    fontFamily:  Platform.OS === 'ios' ? 'Avenir Next Condensed' : 'sans-serif-condensed',
    fontSize: 20,
  },
});


export default withNavigation(connect(mapStateToProps)(AccordionHeader));