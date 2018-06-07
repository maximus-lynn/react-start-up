const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: ['babel-loader', 'eslint-loader']
      },
      // {
      //   test: /\.css$/,
      //   use: ['webpack-extract-css-hot-reload'].concat(ExtractTextPlugin.extract({
      //     use: ['css-loader'],
      //   })),
      // },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin({
    //   filename: 'styles.css',
    // }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}