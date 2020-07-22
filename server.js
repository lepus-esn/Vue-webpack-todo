const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

// dev 和hot用来实现前端的热加载
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const express = require('express');
const path = require('path');

const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    // 在项目中这样的路径都会配置到统一的文件中
    publicPath: 'http://localhost:3000/',
    noInfo: true,
    stats: {
        colors: true
    }
}))

app.use(webpackHotMiddleware(compiler));

app.listen(3000, function(){
    console.log('start');
})


// webpack(webpackConfig, function(err, status) {
//     if(err) throw err;

//     // process.stdout是一个进程的双工流
//     process.stdout.write(status.toString({
//         colors: true,
//         modules: false,
//         children: false,
//         chunks: false,
//         chunkModules: false
//     }) + '\n\n')
// })