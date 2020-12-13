const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // コンパイル後の出力先
    path: path.resolve(__dirname, './dist'),
    // path.resolve：絶対パスを指定
    // __dirname：現在のディレクトリ, './dist'：指定する相対パス
    filename: 'main.js', // コンパイルされたjsのファイル名
  },
  module: {
    rules: [
      {
        // ファイル名を条件に検知するもの(この場合は.cssというファイルにのみ適応させる)
        test: /\.css/,
        use: [
          // ruleの条件に合致したらstyle-loaderとcss-loaderを使用する、という意味
          // 下から優先的に呼ばれるので記述する順番が大事
          //
          {
            // style-loader(css-loaderで読み込んだhtmlに抽出させる)の設定
            loader: 'style-loader'
          },
          {
            // css-loader(jsの中にcssのモジュールを読み込ませる)の設定
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}
