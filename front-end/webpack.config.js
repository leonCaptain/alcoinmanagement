var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const publicPath = '/';
const buildPath = 'dist';

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, buildPath),
    filename: '[name].[chunkhash].js',
    publicPath: publicPath,
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[
          {loader: 'style-loader'},
          {loader:'css-loader',options:{sourceMap:true,modules:true}},
          {loader:'sass-loader',options:{sourceMap:true}}
        ],
        exclude: "/node_modules/"
      },{
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: [
          {loader: 'url-loader?limit=8192'}
        ],
        exclude: "/node_modules/"
      },{
        test: /\.(mp4|ogg|svg)$/,
        use: [
          {loader: 'file-loader'}
        ],
        exclude: "/node_modules/"
      },{
        test:/\.json$/,
        use: [
          {loader:'json-loader'}
        ],
        exclude: "/node_modules/"
      },{
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
   optimization: {
     minimizer: [new UglifyJsPlugin()],
   },
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  optimization: {
     splitChunks: [
       {name: 'vendor'},
       {name: 'runtime'}
     ],
   },
  devtool: 'cheap-module-source-map'
}
