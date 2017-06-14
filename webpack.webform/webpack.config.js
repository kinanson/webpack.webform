const path = require('path'),
    webpack = require('webpack');

const webpackConfig = {
    entry: {
        app: ['./app/index.js','./app/about.js']
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
                loader: 'babel-loader',//js需要經過babel的轉譯
                include: [path.join(__dirname, 'app')]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    }
};

module.exports = webpackConfig
