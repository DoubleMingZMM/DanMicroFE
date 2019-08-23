/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-23 11:52:34
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 15:29:18
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: './src/whole.app.js',
	},
	output: {
		publicPath: '',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			}
		],
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
        CopyWebpackPlugin([
            {from: path.resolve(__dirname, 'src/index.html')},
            {from: path.resolve(__dirname, 'src/style.css')},
            {from: path.resolve(__dirname, 'libs/system.js')},
        ]),
		new CleanWebpackPlugin(['dist'])
	],
	devtool: 'source-map',
	externals: [
	],
    mode: 'development',
    devServer: {
      open: true,
		contentBase: './dist',
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
		// Proxy config for development purposes. In production, you would configure you webserver to do something similar.
        proxy: {
            "/react": {
                target: "http://localhost:9001",
                pathRewrite: {"^/react" : ""}
            },
            "/vue": {
                target: "http://localhost:9002",
                pathRewrite: {"^/vue" : ""}
            }
        }
    }
};
