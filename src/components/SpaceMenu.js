import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import FilterLink from './FilterLink';
import MuseumMenu from './MuseumMenu';
import Accordion from 'react-native-collapsible/Accordion';
import Constants from "../config/constants";
import styles from "./styles/header";
import IconPlusO from './IconPlusO';
import IconMinusO from './IconMinusO';

const SECTIONS = [
  {
    title: 'Museums individually',
    content: () => <MuseumMenu />
  }
];

class SpaceMenu extends React.Component {

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
      <View style={styles.submenu}>       
        <FilterLink filter='museums' navroute='Category' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['museums'].text}</Text></FilterLink>          
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />        
        <FilterLink filter='galeries' navroute='Category' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['galeries'].text}</Text></FilterLink>            
        <FilterLink filter='spaces' navroute='Category' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['spaces'].text}</Text></FilterLink>            
        <FilterLink filter='festivals' navroute='Category' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['festivals'].text}</Text></FilterLink>     
      </View>
    );
  }
}

export default SpaceMenu;