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
                use: extractCss.extract(["css-loader"])
            },
            {
                test: /\.scss$/,
                use: extractCss.extract(["css-loader", "sass-loader"])
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[ext]' //小於10000byte的話，直接使用data url的方式，而不會下載檔案
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
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
