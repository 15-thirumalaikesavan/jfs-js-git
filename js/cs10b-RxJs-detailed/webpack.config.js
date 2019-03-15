const path = require('path');

module.exports = {
  //entry point to the application
  //entry: './src/1-first-observable',
  //entry: './src/2-observer-callbacks.ts',
  //entry: './src/3-handling-error.ts',
  //entry: './src/4-cancel-subscription.ts',
  //entry: './src/5-multiple-subscriptions.ts',
  //entry: './src/6-child-subscriptions.ts',
  //entry: './src/7-cold-observable.ts',
  //entry: './src/8-hot(warm)-observable.ts',
  entry: './src/9-hot-observable.ts',
  // entry: './src/.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
