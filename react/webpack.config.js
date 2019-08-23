/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-23 13:16:58
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 13:45:05
 */
const path = require('path');

module.exports = {
    entry: {
        singleSpaEntry: './src/react.app.js',
        // store: './src/store.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'amd',
        library: 'reactApp'
    },

    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader?cacheDirectory'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/react/',
                        }
                    }
                ]
            }
        ],
    },

    mode: 'development',

    devtool: 'eval-source-map'
};
