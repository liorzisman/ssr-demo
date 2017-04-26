import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FeedApp } from './components/FeedApp';
import { feedApp } from './reducers'


const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

ReactDOM.render(
  <Provider store={createStore(feedApp, preloadedState)}>
    <FeedApp />
  </Provider>,
  document.getElementById('root')
);