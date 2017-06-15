const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin('[name].css'); //隨著import的檔名輸出css檔案

const webpackConfig = {
    entry: {
        index: ['./app/index.js'],
        about: ['./app/about.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, 'app')]
            },
            {
                test: /\.css$/,
                use: extractCss.extract([ "css-loader"])//包裝loader以便輸出css，style-loader在此就要拿掉了，因為我們不需要在js裡面使用css了，不拿掉的話會出錯
            },
            {
                test: /\.scss$/,
                use: extractCss.extract(["css-loader", "sass-loader"])//包裝loader以便輸出css，style-loader在此就要拿掉了，因為我們不需要在js裡面使用css了，不拿掉的話會出錯
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        extractCss //放進此plugins
    ]
};

module.exports = webpackConfig
