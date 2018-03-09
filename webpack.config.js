const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
    //定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    // module: { // 用不同的模块处理不一样的事情
    //     rules: [{
    //             test: /\.js$/,
    //             loader: 'babel-loader',
    //             include: path.resolve(__dirname, 'src')
    //         },
    //         {
    //             test: /\.scss$/,
    //             loader: ['style-loader', 'css-loader', 'sass-loader'],
    //             include: path.resolve(__dirname, 'src')
    //         }
    //     ]
    // },
    // devServer: { // webpack-dev-server 热更新的配置
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     progress: true,
    // },
}