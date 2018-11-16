import React from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import { withNavigation } from 'react-navigation';
import styles from "./styles/header";

const mapStateToLinkProps = (state, ownProps) => {
  return {
    ...ownProps,
    active: ownProps.filter === ownProps.navigation.getParam('cat', 'home'),
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