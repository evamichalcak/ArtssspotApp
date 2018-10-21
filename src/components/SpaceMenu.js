import React from 'react';
import { View } from 'react-native';
import FilterLink from './FilterLink';
import Constants from "../config/constants";

class SpaceMenu extends React.Component {

  render() {
    return (
      <View>       
        <FilterLink text={Constants.CATS['museums'].text} filter='museums' navroute='Category' />       
        <FilterLink text={Constants.CATS['artcenters'].text} filter='artcenters' navroute='Category' />       
        <FilterLink text={Constants.CATS['galeries'].text} filter='galeries' navroute='Category' />       
        <FilterLink text={Constants.CATS['spaces'].text} filter='spaces' navroute='Category' />       
        <FilterLink text={Constants.CATS['festivals'].text} filter='festivals' navroute='Category' />
      </View>
    );
  }
}

export default SpaceMenu;