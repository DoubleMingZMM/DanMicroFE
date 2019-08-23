/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-23 11:47:55
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 14:48:18
 */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: {
		singleSpaEntry: './src/vue.app.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'vue'
	},
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    publicPath: '/vue/',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
	resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [
            ".js", ".vue"
        ],
		modules: [
			__dirname,
			'node_modules',
		],
	},
    mode: 'development',
	devtool: 'none',
	externals: [
	],
	plugins: [
        new VueLoaderPlugin()
	],
};
