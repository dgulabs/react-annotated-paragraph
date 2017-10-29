const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: 'index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname),    
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?![react\-annotated\-paragraph])/,
        use: ['babel-loader']
      }
    ],
    loaders: [{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    modules: [
      path.resolve('.'),
      path.resolve('node_modules'),
    ]
  },
  devServer: {
    // hot : true,
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8080,
    open : true,
    contentBase : ".",
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
