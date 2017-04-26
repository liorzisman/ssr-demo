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

function getTimeToFirstPaint() {
  const timeToFirstPaint = (window.chrome.loadTimes().firstPaintTime - window.chrome.loadTimes().startLoadTime) * 1000;
  console.log('Time to first paint: ', timeToFirstPaint);
}

setTimeout(() => {
  getTimeToFirstPaint();
}, 2000);
