const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin') //vueのプラグイン

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/script.js',
  },
  module: {
    rules: [
      {
        // vueをビルドする
        test: /\.vue/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.js/,
        exclude: /node_module/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { 'targets': '> 0.25%, not dead' }
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
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'img/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              }
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
    new VueLoaderPlugin(),
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
