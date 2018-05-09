import React from 'react';
import { View } from 'react-native';
import FilterLink from './FilterLink';

class Header extends React.Component {
  render() {
    return (
      <View>
        <FilterLink text='All' filter='SHOW_ALL' />
        <FilterLink text='Active' filter='SHOW_ACTIVE' />
        <FilterLink text='Completed' filter='SHOW_COMPLETED' />
      </View>
    );
  }
}
export default Header;