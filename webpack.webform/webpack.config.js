const path = require('path'),
    webpack = require('webpack');

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
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    }
};

module.exports = webpackConfig
