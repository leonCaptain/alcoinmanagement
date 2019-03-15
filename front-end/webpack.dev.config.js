var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicPath = '/';
const buildPath = 'dist';

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, buildPath),
    filename: '[name].js',
    publicPath: publicPath,
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: ['css-loader', 'sass-loader']
             }),
        exclude: "/node_modules/"
      },
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
     splitChunks: {
      chunks: 'all'
     }
   },
  plugins: [
    new webpack.ProvidePlugin({
           "React": "react",
    }),
    //单独提取出css
    new ExtractTextPlugin({
     filename: '[name].[contenthash:5].css',
     allChunks: true
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    publicPath: publicPath,
    contentBase: path.resolve(__dirname, buildPath),
    inline: true,
    historyApiFallback: true,
    hot: true,
    port: '3333'
   }
}
