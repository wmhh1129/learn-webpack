const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
    //定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
    entry: APP_PATH, // 项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    output: { // 让webpack编译完的文件放在哪里
        filename: 'bundle.js', //输出的文件名 合并以后的js会命名为bundle.js
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [ // 放置不一样的插件,自动生成一个html文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    module: { // 用不同的模块处理不一样的事情
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    devServer: { // webpack-dev-server 热更新的配置
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
}