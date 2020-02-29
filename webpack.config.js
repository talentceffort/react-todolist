const path = require('path');

module.exports = {
  name: 'TodoList-Setting',
  mode: 'development', // production
  devtool: 'eval', // 속도를 빠르게(?)

  resolve: {
    extensions: ['*', '.js', '.css'], // 확장자 관리.
  },
  // 입력
  entry: {
    app: ['./index'],
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader', // 바벨을 사용하겠음
      options: {
        presets: ['@babel/preset-react'],
        plugins: [],
      },
    }],
  },

  devServer: {
    contentBase: './dist',
    publicPath: '/',
    hot: true,
    open: true,
  },

  // 출력
  output: {
    path: path.join(__dirname, 'dist'), // __dirname 은 현재 프로젝트 폴더를 나타냄. 여기서는 react-todolist
    filename: 'bundle.js',
  },
};
