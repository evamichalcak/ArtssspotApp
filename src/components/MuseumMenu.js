import React from 'react';
import { Text, ScrollView, StyleSheet, Platform } from 'react-native';
import FilterLink from './FilterLink';
import Constants from "../config/constants";
import styles from "./styles/header";

class MuseumMenu extends React.Component {

  render() {
    return (
      <ScrollView style={styles.submenu} contentContainerStyle={styles.submenuscroll}>       
        <FilterLink filter='macba' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['macba'].text}</Text></FilterLink>     
        <FilterLink filter='cccb' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['cccb'].text}</Text></FilterLink>           
        <FilterLink filter='caixaforum' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['caixaforum'].text}</Text></FilterLink>     
        <FilterLink filter='miro' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['miro'].text}</Text></FilterLink>            
        <FilterLink filter='mnac' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['mnac'].text}</Text></FilterLink>           
        <FilterLink filter='picasso' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['picasso'].text}</Text></FilterLink>     
        <FilterLink filter='meam' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['meam'].text}</Text></FilterLink>           
        <FilterLink filter='blueproject' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['blueproject'].text}</Text></FilterLink>           
        <FilterLink filter='fotocolectania' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['fotocolectania'].text}</Text></FilterLink>           
        <FilterLink filter='espaivolart' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['espaivolart'].text}</Text></FilterLink>           
        <FilterLink filter='lapedrera' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['lapedrera'].text}</Text></FilterLink>           
        <FilterLink filter='sunol' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['sunol'].text}</Text></FilterLink>           
        <FilterLink filter='tapies' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['tapies'].text}</Text></FilterLink>           
        <FilterLink filter='mapfre' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['mapfre'].text}</Text></FilterLink>           
        <FilterLink filter='lavirreina' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['lavirreina'].text}</Text></FilterLink>           
        <FilterLink filter='santamonica' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['santamonica'].text}</Text></FilterLink>           
        <FilterLink filter='canframis' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['canframis'].text}</Text></FilterLink>           
        <FilterLink filter='disseny' navroute='Venue' style={styles.item} underlayColor={'#E90901'}><Text style={styles.text}>{Constants.CATS['disseny'].text}</Text></FilterLink>           
      </ScrollView>
    );
  }
}

export default MuseumMenu;