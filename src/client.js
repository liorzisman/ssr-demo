import ReactDOM from 'react-dom'
import React from 'react'

import { FeedApp } from './components/FeedApp';

function printTimeToFirstPaint() {
  setTimeout(() => {
    const timeToFirstPaint = (window.chrome.loadTimes().firstPaintTime - window.chrome.loadTimes().startLoadTime) * 1000;
    console.log(`Time to first paint: ${parseInt(timeToFirstPaint, 10)}ms`);
  }, 500);
}

ReactDOM.render(
  <FeedApp />,
  document.getElementById('root'),
  printTimeToFirstPaint
);
