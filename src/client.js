import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FeedApp } from './components/FeedApp';
import { feedApp } from './reducers'

ReactDOM.render(
  <Provider store={createStore(feedApp)}>
    <FeedApp />
  </Provider>,
  document.getElementById('root')
);