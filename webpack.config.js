var path = require('path')
var webpack = require('webpack')

module.exports = {

  // var config = {
  entry: './src/js/main.js',
  // var path = require('path');
  // entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'src/js/main.js')],

  output: {
    path: '/dist/js/',
    //  path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/dist/js/'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [{
    // test: /\.jsx?/,
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',

      query: {
      // presets: ['es2015', 'react' ],
        presets: ['react', 'es2015', 'stage-0'],
      }
    }
    /* {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint-loader',
      // this is similar to defining a preloader
      enforce: 'pre'
    } */
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

// module.exports = config
