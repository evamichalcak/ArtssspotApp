import React from 'react';
import { Text, View, StyleSheet, Platform, TouchableHighlight } from 'react-native';
import FilterLink from './FilterLink';
import CategoryMenu from './CategoryMenu';
import SpaceMenu from './SpaceMenu';
import Accordion from 'react-native-collapsible/Accordion';
import Constants from "../config/constants";
import styles from "./styles/header";
import IconPlusO from './IconPlusO';
import IconMinusO from './IconMinusO';

const SECTIONS = [
  {
    title: 'By category',
    content: () => <CategoryMenu />
  },
  {
    title: 'By Venue',
    content: () => <SpaceMenu />
  }
];


class Header extends React.Component {

  state = {
    activeSections: []
  };

  _renderHeader = (section, index, isActive, sections) => {
    if (isActive) {
      return (
        <View style={[styles.item, styles.collapsible]}>
          <IconMinusO style={[styles.text, styles.icon]} />
          <Text style={[styles.text, styles.section]}>
               {section.title}
          </Text>
        </View>
      );
    }
    return (
      <View style={[styles.item, styles.collapsible]}>
        <IconPlusO style={[styles.text, styles.icon]} />
        <Text style={[styles.text, styles.section]}>
             {section.title}
        </Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View>
        {section.content()}
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={styles.container}>     
        <FilterLink filter='home' navroute='Home' style={styles.firstitem} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['home'].text}</Text></FilterLink>       
        <FilterLink filter='openings' navroute='Category' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['openings'].text}</Text></FilterLink>          
        <FilterLink filter='unmissables' navroute='Category' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['unmissables'].text}</Text></FilterLink> 
        <FilterLink filter='recommended' navroute='Category' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['recommended'].text}</Text></FilterLink>  
        <FilterLink filter='activities' navroute='Category' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['activities'].text}</Text></FilterLink>  
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }
}

export default Header;

