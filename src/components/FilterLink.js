import React from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import { setVisibilityFilter } from '../actions';
import { getVisibilityFilter } from '../reducers';

const mapStateToLinkProps = (state, ownProps) => {
  const filter = getVisibilityFilter(state);
  return {
    active: ownProps.filter === filter
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