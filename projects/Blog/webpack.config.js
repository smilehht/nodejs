/**
*   @file webpack打包配置文件
*   @author huhongtao
*/

'use strict';

let webpack = require('webpack');

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
                test: /\.(css|scss)/,
                loader: 'style!css!sass'
            }
        ]
    },

    resolve: {
        extensions: ['.', '.js'],
        alias: {

        }
    }

    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warning: true
    //         }
    //     })
    // ]
};