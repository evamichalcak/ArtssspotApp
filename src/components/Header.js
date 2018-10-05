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
        <FilterLink text={Constants.CATS['proximas-inauguraciones'].text} filter={Constants.CATS['proximas-inauguraciones'].id} navroute='Artssspot' />
        <FilterLink text={Constants.CATS['los-imperdibles'].text} filter={Constants.CATS['los-imperdibles'].id} navroute='Artssspot' />
        <FilterLink text={Constants.CATS['los-recomendados'].text} filter={Constants.CATS['los-recomendados'].id} navroute='Artssspot' />
        <FilterLink text={Constants.CATS['para-descubrir'].text} filter={Constants.CATS['para-descubrir'].id} navroute='Artssspot' />
        <FilterLink text={Constants.CATS['all'].text} filter={Constants.CATS['all'].id} navroute='Artssspot' />
      </View>
    );
  }
}
//console.log('const filter: ' + Constants.CATS['Próximas inauguraciones']);
export default withNavigation(Header);