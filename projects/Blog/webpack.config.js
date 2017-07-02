/**
*   @file webpack打包配置文件
*   @author huhongtao
*/

'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        home: __dirname + '/resource/home/index.js'
    },

    output: {
        path: __dirname + '/public/js',
        filename: '[name].bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(css)/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.', '.js'],
        alias: {

        }
    },

    plugins: [
        new ExtractTextPlugin('style.css')
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warning: true
        //     }
        // })
    ]
};