const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const EncodingPlugin = require('webpack-encoding-plugin');
const webpackConfig = require('./webpack.config');
const pjson = require('./package.json');


module.exports = merge(webpackConfig, {

    devtool: 'source-map',

    output: {
        path: path.join(__dirname, 'dist', pjson.version),
        filename: '[name].js'
    },

    plugins: [
        new CleanWebpackPlugin([`dist/${pjson.version}`]),
        new EncodingPlugin({
            encoding: 'gzip'
        })
    ]

});