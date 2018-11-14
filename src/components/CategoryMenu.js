import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import FilterLink from './FilterLink';
import Constants from "../config/constants";
import styles from "./styles/header";

class CategoryMenu extends React.Component {

  render() {
    return (
      <View>       
        <FilterLink filter='contemporary' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['contemporary'].text}</Text></FilterLink>     
        <FilterLink filter='design' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['design'].text}</Text></FilterLink>           
        <FilterLink filter='photography' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['photography'].text}</Text></FilterLink>           
        <FilterLink filter='urban' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['urban'].text}</Text></FilterLink>            
        <FilterLink filter='architecture' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['architecture'].text}</Text></FilterLink>     
        <FilterLink filter='illustration' navroute='Category' style={styles.item}><Text style={styles.text}>{Constants.CATS['illustration'].text}</Text></FilterLink>     
      </View>
    );
  }
}

export default CategoryMenu;