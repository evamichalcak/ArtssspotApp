import React from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import { withNavigation } from 'react-navigation';

const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: ownProps.filter === ownProps.navigation.getParam('cat', 'home')
  };
};
const mapDispatchToLinkPorps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      ownProps.navigation.navigate(ownProps.navroute, {'cat': ownProps.filter});
    }
  };
};
const FilterLink = withNavigation(connect(
  mapStateToLinkProps,
  mapDispatchToLinkPorps
)(Link));

export default FilterLink;