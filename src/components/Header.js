import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active:
    ownProps.filter ===
    state.visibilityFilter
  };
};

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
};

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

export const Header = () => (
  <div className="header">
    <div className="header-top">
      <img className="header-logo" src="/static/outstagram.png"/>
      <h1 className="header-title">Outstragram</h1>
    </div>
    <p className="header-filters">
      Filter:

      <FilterLink filter='SHOW_ALL'>
        All
      </FilterLink>

      <FilterLink filter='SHOW_ACTIVE'>
        Active
      </FilterLink>
      
      <FilterLink filter='SHOW_LIKED'>
        Liked
      </FilterLink>
    </p>
  </div>
);