var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/client.js'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: []
        }
      }
    ]
  }
};
