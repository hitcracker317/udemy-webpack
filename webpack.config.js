const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/script.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: './css/style.css'
    }),
    new htmlWebpackPlugin({
      template: './src/template/index.html',
    }),
    new CleanWebpackPlugin(),
  ]
}
