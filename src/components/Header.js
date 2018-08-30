import React from 'react';
import { View } from 'react-native';
import FilterLink from './FilterLink';
import Constants from "../config/constants";

class Header extends React.Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <FilterLink text={Constants.CATS['home'].text} filter={Constants.CATS['home'].id} />
        <FilterLink text={Constants.CATS['proximas-inauguraciones'].text} filter={Constants.CATS['proximas-inauguraciones'].id} />
        <FilterLink text={Constants.CATS['los-imperdibles'].text} filter={Constants.CATS['los-imperdibles'].id} />
        <FilterLink text={Constants.CATS['los-recomendados'].text} filter={Constants.CATS['los-recomendados'].id} />
        <FilterLink text={Constants.CATS['para-descubrir'].text} filter={Constants.CATS['para-descubrir'].id} />
        <FilterLink text={Constants.CATS['all'].text} filter={Constants.CATS['all'].id} />
      </View>
    );
  }
}
//console.log('const filter: ' + Constants.CATS['Próximas inauguraciones']);
export default Header;