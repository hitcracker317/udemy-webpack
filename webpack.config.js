const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/script.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader' //sassのloaderを優先する
          }
        ]
      },
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'img/[name].[ext]'
            }
          }
        ]
      },
      {
        // pugをコンパイルしてhtmlを書き出す
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: './css/style.css'
    }),
    new htmlWebpackPlugin({
      template: './src/template/index.pug',
      filename: 'index.html',
    }),
    new htmlWebpackPlugin({
      template: './src/template/about.pug',
      filename: 'about.html',
    }),
    new CleanWebpackPlugin(),
  ]
}
