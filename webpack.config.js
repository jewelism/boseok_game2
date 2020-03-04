const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'docs/js'),
    filename: '[name].bundle.[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env'],
        //     plugins: ['@babel/plugin-proposal-class-properties']
        //   },
        // }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      inject: true,
      filename: path.join(__dirname, './docs/index.html'),
    }),
  ],

  // devtool: 'source-map',
  // mode: 'development'
  mode: 'production'
};