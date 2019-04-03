var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';
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
            test: /\.(sc|c)ss$/,
            use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ]
          },{
            test: /\.(png|jpg|gif|woff|woff2)$/,
            use: [
                {loader: 'url-loader?limit=8192'}
            ],
            exclude: "/node_modules/"
          },{
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'babel-loader',
                },
                {
                  loader: '@svgr/webpack',
                  options: {
                    babel: false,
                    icon: true,
                  },
                },
              ],
            },{
            test:/\.json$/,
            use: [
                {loader:'json-loader'}
            ],
            exclude: "/node_modules/"
          },{
            test:/\.jsx?$/,
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
        new MiniCssExtractPlugin({
          filename: devMode ? '[name].css' : '[name].[hash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
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
    },
  resolve: {
     extensions: ['.js', '.jsx', '.scss']
  }
}
