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
        <FilterLink text={Constants.CATS['home'].text} filter={Constants.CATS['home'].id} navroute='Artssspot' />
        <FilterLink text={Constants.CATS['openings'].text} filter={Constants.CATS['openings'].id} navroute='Artssspot' />
        <FilterLink text={Constants.CATS['unmissables'].text} filter={Constants.CATS['unmissables'].id} navroute='Artssspot' />
        <FilterLink text={Constants.CATS['recommended'].text} filter={Constants.CATS['recommended'].id} navroute='Artssspot' />
        <FilterLink text={Constants.CATS['discovery'].text} filter={Constants.CATS['discovery'].id} navroute='Artssspot' />
        <FilterLink text={Constants.CATS['all'].text} filter={Constants.CATS['all'].id} navroute='Artssspot' />
      </View>
    );
  }
}
//console.log('const filter: ' + Constants.CATS['Próximas inauguraciones']);
export default withNavigation(Header);