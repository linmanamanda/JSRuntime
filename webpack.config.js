const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './')
  },
  devServer: {
    host: '0.0.0.0',
    useLocalIp: true,
    port: 8000,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
