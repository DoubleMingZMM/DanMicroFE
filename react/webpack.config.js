/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-23 13:16:58
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 17:16:20
 */
const path = require('path');
const HappyPack = require('happypack');

// 创建 happypack 共享进程池，其中包含 6 个子进程
const happyThreadPool = HappyPack.ThreadPool({ size: 6 });

module.exports = {
    mode: 'development',

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
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader', 'postcss-loader'],
                // 现在用下面的方式替换成 happypack/loader，并使用 id 指定创建的 HappyPack 插件
                use: ['happypack/loader?id=css']
            },
            {
                test: /\.less$/,
                // use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
                // 现在用下面的方式替换成 happypack/loader，并使用 id 指定创建的 HappyPack 插件
                use: ['happypack/loader?id=less'],
                // include: resolvePath('src')
            }
        ],
    },

    plugins: [
        // happypack 实现
        new HappyPack({
            /*
            * 必须配置项
            */
            // id 标识符，要和 rules 中指定的 id 对应起来
            id: 'css',
            // 需要使用的 loader，用法和 rules 中 Loader 配置一样
            // 可以直接是字符串，也可以是对象形式
            loaders: ['style-loader', 'css-loader', 'postcss-loader'],
            // 使用共享进程池中的进程处理任务
            threadPool: happyThreadPool
        }),
        new HappyPack({
            /*
             * 必须配置
             */
            // id 标识符，要和 rules 中指定的 id 对应起来
            id: 'less',
            // 需要使用的 loader，用法和 rules 中 Loader 配置一样
            // 可以直接是字符串，也可以是对象形式
            loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
            // 使用共享进程池中的进程处理任务
            threadPool: happyThreadPool
        }),
    ],

    /**
     * @description resolve 的配置信息
     * resolve 配置项是用来配置 resolve
     */
    resolve: {
        alias: {
            '@':  path.join(__dirname, 'src')
        },
        // 一般的第三方库的入口文件在main中，尽量不要去查找，使用main减少搜索性能
        mainFields: ['main'],
        // 加上node_modules前缀，表示在node_modules目录下查找第三方库，缩短文件路径，进行优化
        // modules: [resolvePath('node_modules')],
        // 列表长度要小，高频放在前面默认值就是js 、less、css和 json
        extensions:['.js', '.less', '.css', '.json']
    },

    devtool: 'eval-source-map'
};
