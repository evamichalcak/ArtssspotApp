import React from 'react';
import { Text, View } from 'react-native';
import FilterLink from './FilterLink';
import Constants from "../config/constants";

import { withNavigation } from 'react-navigation';

class Header extends React.Component {
  render() {
    return (
      <View style={{marginTop: 55}}>
        <Text>{this.props.navigation.getParam('cat', 'home')}</Text>
        <FilterLink text={Constants.CATS['home'].text} navroute='Home' />
        <FilterLink text={Constants.CATS['openings'].text} filter='openings' navroute='Category' />
        <FilterLink text={Constants.CATS['unmissables'].text} filter='unmissables' navroute='Category' />
        <FilterLink text={Constants.CATS['recommended'].text} filter='recommended' navroute='Category' />
        <FilterLink text={Constants.CATS['discovery'].text} filter='discovery' navroute='Category' />
        <FilterLink text={Constants.CATS['activities'].text} filter='activities' navroute='Category' />
        <FilterLink text={Constants.CATS['all'].text} filter='all' navroute='Category' />
      </View>
    );
  }
}
//console.log('const filter: ' + Constants.CATS['Próximas inauguraciones']);
export default withNavigation(Header);