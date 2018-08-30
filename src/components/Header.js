import React from 'react';
import { View } from 'react-native';
import FilterLink from './FilterLink';
import Constants from "../config/constants";

class Header extends React.Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <FilterLink text='Home' filter='home' />
        <FilterLink text='Próximas inauguraciones' filter={Constants.CATS['Próximas inauguraciones']} />
        <FilterLink text='Los imperdibles' filter={Constants.CATS['Los imperdibles']} />
        <FilterLink text='Los recomendados' filter={Constants.CATS['Los recomendados']} />
        <FilterLink text='Para descubrir' filter={Constants.CATS['Para descubrir']} />
        <FilterLink text='Todo' filter='all' />
      </View>
    );
  }
}
//console.log('const filter: ' + Constants.CATS['Próximas inauguraciones']);
export default Header;