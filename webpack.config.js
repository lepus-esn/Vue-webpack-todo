const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname,'src/index.js'), // 代表路径拼接
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {test: /\.css$/,use: ["vue-style-loader", "css-loader", "stylus-loader"]  },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    // 限制开始转译的大小，小的图片不用处理，减少http请求
                    limit: 1024,
                    name: '[name]-moira.[ext]'
                }
            },
            {
                test: /\.jsx/,
                use: [
                    {
                    loader: 'babel-loader',
                    options:{
                            presets:[
                                "@babel/env", "@babel/react"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.tsx/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.ts/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.styl/,
                // 用stylus处理完后，是css内容，要处理css内容，必须返回上以及，webpack就是一层层向上找，所以多种loader进行搭配
                use:['style-loader', 'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    } // stylus-loader会生成sourceMap,postcss-loader也会生成，为了使用前一个就好了，提高编译效率
                },
                 'stylus-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        open: true, // 自动打开浏览器
        port: 8080,// 端口号
        hot: true
    },
    mode: 'development',
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin(), // 用来自动生成index.html文件，作为基准文件
        new webpack.HotModuleReplacementPlugin(), // 热更新
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.styl', '.ts', '.tsx']
    }
}