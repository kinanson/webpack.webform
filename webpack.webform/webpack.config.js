const path = require('path'),
    webpack = require('webpack'),
    rimraf = require('rimraf'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin('[name].css');

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
                use: extractCss.extract(
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    }
                )
            },
            {
                test: /\.scss$/,
                use: extractCss.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: { sourceMap: true }
                        }, {
                            loader: "sass-loader",
                            options: { sourceMap: true }
                        }]
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[ext]'
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
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        extractCss
    ]
};

switch (process.env.NODE_ENV) {
    case 'prod':
        rimraf(path.join(__dirname, 'dist'), () => console.log('success remove'));
        webpackConfig.devtool = "#source-map";
        break;
}

module.exports = webpackConfig;
