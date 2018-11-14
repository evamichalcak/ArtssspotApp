import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import FilterLink from './FilterLink';
import Constants from "../config/constants";
import styles from "./styles/header";

class SpaceMenu extends React.Component {

  render() {
    return (
      <View>       
        <FilterLink filter='museums' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['museums'].text}</Text></FilterLink>          
        <FilterLink tfilter='artcenters' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['artcenters'].text}</Text></FilterLink>          
        <FilterLink filter='galeries' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['galeries'].text}</Text></FilterLink>            
        <FilterLink filter='spaces' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['spaces'].text}</Text></FilterLink>            
        <FilterLink filter='festivals' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['festivals'].text}</Text></FilterLink>     
      </View>
    );
  }
}

export default SpaceMenu;