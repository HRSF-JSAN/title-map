const path = require('path');

const OUT_DIR = path.join(__dirname, '/client/dist');
const SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'cheap-module-source-map',
};
