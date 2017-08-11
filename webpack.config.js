const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/lib/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'vueToast.js',
    libraryTarget: 'umd',
    library: 'VueToast'
  },
  module: {
      rules: [
          {
              test: /\.vue$/,
              exclude: /node_modules/,
              loader: 'vue-loader',
              options: {
                  loaders: {
                      scss: 'style-loader!css-loader!sass-loader'
                  }
              }
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          }
      ]  
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin()
  ]
}