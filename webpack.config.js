const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
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
    // 使用するプラグインをこちらで定義
    new MiniCSSExtractPlugin(),
    new htmlWebpackPlugin({
      // プラグインのオプション
      // テンプレート先のHTMLを指定する
      template: './src/index.html',
    }),
  ]
}
