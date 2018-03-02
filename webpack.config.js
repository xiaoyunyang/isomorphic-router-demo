process.env.NODE_ENV = 'development';

module.exports = {
  entry: [
    'babel-polyfill',
    './client/main.js',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'browser.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.es6'],
  },
};
