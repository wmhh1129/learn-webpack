const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
//定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
    devtool: 'eval-source-map', // 开发环境中生成sourceMap，让打包之后的文件，也能定位到原本写代码的位置。(生产阶段勿用)
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    module: { // 用不同的模块处理不一样元素
        rules: [
            {
                test: /\.js$/, // 正则识别.js为尾缀的文件
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env" // 支持es6的语法,如果这里内容很多，可以抽离到.babelrc文件中
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$|\.scss$/,
                use: [
                    {
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    }, {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    }, {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }
                ]
            }
        ]
    },
    devServer: { // webpack-dev-server 热更新的配置
        historyApiFallback: true,
        contentBase: "./public", // 本地服务器所加载的页面所在的目录
        inline: true // 实时刷新
    },
}