/**
*   @file webpack打包配置文件
*   @author huhongtao
*/

const webpack = require('webpack');
var path = require('path');
const node_module_path = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        home: __dirname + '/resource/js/home/index.js',
        main: __dirname + '/webpages/router.js',
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
            'react': path.join(node_module_path, 'react'),
            'antd': path.join(node_module_path, 'antd')
        }
    },

    externals: {

        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'react-router': 'window.ReactRouter',
        'antd': 'window.Antd',
        'echarts': 'window.echarts'
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