import Express from 'express';
import React from 'react';
import path from 'path';

import { FeedApp } from './components/FeedApp';

import { renderToString } from 'react-dom/server';

const app = Express();
const port = 3000;

function renderPage(html) {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Server Side</title>
      <link rel="stylesheet" href="/static/style.css"/>
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
    <FeedApp />
  );

  res.send(renderPage(html));
}

function handleClient(req, res) {
  res.sendFile(path.join(__dirname + '/../static/client.html'));
}

app.use('/ssr', handleRender);
app.use('/client', handleClient);
app.use('/static', Express.static('static'));

app.listen(port);