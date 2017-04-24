import React from 'react';
import { combineReducers } from 'redux';
import { todos } from './todos';
import { visibilityFilter } from './filters';

export const todoApp = combineReducers({
  todos,
  visibilityFilter
});
