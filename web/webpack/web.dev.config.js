const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, '../../app/web/index'),
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader?sourceMap',
            {
              loader: 'autoprefixer-loader',
              options: {
                browsers: 'last 2 version'
              }
            },
            'less-loader?sourceMap',
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        // exclude: /node_modules\/(?!(react-icons)\/).*/,
        // exclude: function (modulePath) {
        //   return /node_modules/.test(modulePath) &&
        //       !/node_modules\/react-icons/.test(modulePath) &&
        //       !/node_modules\/react-icons-base/.test(modulePath);
        // },
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: [['react-transform', {
                transforms: [{
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module']
                }]
              }]]
            }
          }
        ]
      }, {
        test: /\.json$/,
        use: ['json-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '[DEV] My App',
      template: path.join(__dirname, '../../app/web/index.ejs'),
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
