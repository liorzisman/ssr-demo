import Express from 'express';
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FeedApp } from './components/FeedApp';
import { feedApp } from './reducers'

import { renderToString } from 'react-dom/server';

const app = Express();
const port = 3000;

function renderFullPage(html) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Client</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="/static/bundle.js"></script>
  </body>
  </html>
  `;
}

function handleRender(req, res) {

  const html = renderToString(
    <Provider store={createStore(feedApp)}>
      <FeedApp />
    </Provider>,
  )

  res.send(renderFullPage(html));
}

app.use('/static', Express.static('static'));
app.use(handleRender);

app.listen(port);