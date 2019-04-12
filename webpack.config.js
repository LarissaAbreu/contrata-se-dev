const webpack = require('webpack');
const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/assets/scripts/index.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.svg$/,
      exclude: /node_modules/,
      loader: ['svg-react-loader']
    }]
  },
  plugins: [
    new copyWebpackPlugin([
      {from: './src/index.html', to: './'},
      {from: './src/favicon.png', to: './'},
      {from: './src/assets/icons/open-graph.png', to: './assets/icons/'},
      {from: './CNAME', to: './'}
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devServer: {
    contentBase: './dist/',
    port: '8000',
    historyApiFallback: true,
    hot: true,
    open: true
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js'
  }
}
