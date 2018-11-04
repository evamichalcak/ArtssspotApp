import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export function P(props) {
  return (
    <Text style={styles.base}>
      {props.children}
    </Text>
  );
}

export function Strong(props) {
  return (
    <Text style={styles.base, styles.strong}>
      {props.children}
    </Text>
  );
}

export function Em(props) {
  return (
    <Text style={styles.base, styles.em}>
      {props.children}
    </Text>
  );
}

export function Small(props) {
  return (
    <Text style={styles.base, styles.small}>
      {props.children}
    </Text>
  );
}

export function H1(props) {
  return (
    <Text style={styles.header, styles.h1}>
      {props.children}
    </Text>
  );
}

export function H2(props) {
  return (
    <Text style={styles.header, styles.h2}>
      {props.children}
    </Text>
  );
}

export function H3(props) {
  return (
    <Text style={styles.header, styles.h3}>
      {props.children}
    </Text>
  );
}




const styles = StyleSheet.create({
	base: {
    	fontFamily: Platform.OS === 'ios' ? 'Avenir Next Condensed' : 'sans-serif-condensed',
    	fontSize: 18,
	},
	header: {
		fontFamily: 'sans-serif-condensed',
	},
	strong: {
		fontFamily:  Platform.OS === 'ios' ? 'Avenir Next Condensed' : 'sans-serif-condensed',
    	fontSize: 18,
    	fontWeight: 'bold',
	},
	em: {
		fontFamily:  Platform.OS === 'ios' ? 'Avenir Next Condensed' : 'sans-serif-condensed',
    	fontSize: 18,
    	fontStyle: 'italic'
	},
	small: {
		fontFamily:  Platform.OS === 'ios' ? 'Avenir Next Condensed' : 'sans-serif-condensed',
    	fontSize: 14
	},
	h1: {
		fontFamily: 'NewsCycle',
    	fontSize: 28
	},
	h2: {
		fontFamily: 'NewsCycle',
    	fontSize: 24
	},
	h3: {
		fontFamily: 'NewsCycle',
    	fontSize: 20
	},
});