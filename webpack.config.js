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
        test: /\.js/,
        exclude: /node_module/, // node_modulesのディレクトリは除外する
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env', // babelのプラグインが束になったもの
                  { 'targets': '> 0.25%, not dead' } //0.25%以上のシェアのあるブラウザとサポートが終了していないバージョンを対象とする
                ]
              ],
            }
          },
        ]
      },
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
            loader: 'sass-loader'
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
