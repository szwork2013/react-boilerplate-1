var path = require('path');
var webpack = require('webpack');
var Autoprefixer = require('autoprefixer');
var HtmlPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var svgoConfig = JSON.stringify({
    plugins: [
        {cleanupAttrs: true},   // 清理属性换行和重复的空格
        {cleanupEnableBackground: true},   // 移除或清理 enable-background 属性
        {cleanupIDs: true},   // 清理未使用的 和 压缩使用的 ID
        {removeRasterImages: true}, // 移除栅格图标，默认值 false √
        {removeDimensions: true}, // 移除 width/height 属性，默认值 false √
        {removeStyleElement: true}, // 移除 <style> 元素，默认值 false √
    ]
});

module.exports = {
    devtool: 'eval',
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.less', '.css', '.json']
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'app'),
        // publicPath: '/',
        filename: 'resources/js/[name]-[hash:7].js',
    },
    module: {
        preLoaders: [
            {
                test: /\.svg$/,
                include: path.join(__dirname, 'src'),
                loader: 'svgo?' + svgoConfig
            }
        ],
        loaders: [
            {
                test: /\.(png|jpe?g|gif)$/,
                include: path.join(__dirname, 'src'),
                loaders: [
                    'file?&name=resources/images/[name]-[sha512:hash:base64:7].[ext]',
                    // 'url?limit=10000',
                    'image-webpack'
                ]
            },
            {
                test: /\.(ttf|woff|eot)$/,
                include: path.join(__dirname, 'src'),
                loader: 'file&name=resources/fonts/[name]-[sha512:hash:base64:7].[ext]',
            },
            {
                test: /\.svg$/,
                include: path.join(__dirname, 'src'),
                loader: 'svg-sprite?' + JSON.stringify({
                    name: '[name]-[hash]'
                })
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loaders: ['react-hot', 'babel']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            '__DEV__': true
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3100,
            proxy: 'http://localhost:3000/'
        }),
        new HtmlPlugin({
            template: 'src/index.ejs',
            inject: true,
            title: 'App Title',
            favicon: './src/favicon.ico',
        }),
    ],
    postcss: [
        Autoprefixer({ browsers: ['last 3 versions'] })
    ]
};
