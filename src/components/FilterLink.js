import React from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import { setVisibilityFilter } from '../actions';

const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchToLinkPorps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkPorps
)(Link);

export default FilterLink;