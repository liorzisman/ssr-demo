import React from 'react';
import { combineReducers } from 'redux';
import { posts } from './posts';
import { visibilityFilter } from './filters';

export const feedApp = combineReducers({
  posts,
  visibilityFilter
});
