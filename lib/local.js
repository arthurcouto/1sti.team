const webpack = require('webpack');
const path = require("path");
const DashBoardPlugin = require('webpack-dashboard/plugin');
const pkg = require('../package.json');

const PATHS = {
  app: path.join(__dirname, '../app'),
  build: path.join(__dirname, '../build'),
};

module.exports = {
  preLoaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components|build)/,
      loader: 'eslint'
    }
  ],
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashBoardPlugin()
  ]
};
