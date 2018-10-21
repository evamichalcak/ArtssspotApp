import React from 'react';
import { View } from 'react-native';
import FilterLink from './FilterLink';
import Constants from "../config/constants";

class CategoryMenu extends React.Component {

  render() {
    return (
      <View>       
        <FilterLink text={Constants.CATS['contemporary'].text} filter='contemporary' navroute='Category' />       
        <FilterLink text={Constants.CATS['design'].text} filter='design' navroute='Category' />       
        <FilterLink text={Constants.CATS['photography'].text} filter='photography' navroute='Category' />       
        <FilterLink text={Constants.CATS['urban'].text} filter='urban' navroute='Category' />       
        <FilterLink text={Constants.CATS['architecture'].text} filter='architecture' navroute='Category' />
        <FilterLink text={Constants.CATS['illustration'].text} filter='illustration' navroute='Category' />
      </View>
    );
  }
}

export default CategoryMenu;