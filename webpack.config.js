const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/app'
  },
  optimization: {},
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
          fallback: 'style-loader'
        })
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader']
      }
    ]
  }
};
