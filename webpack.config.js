const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
// let extractLESS = new ExtractTextPlugin('style2.css');
// let extractCSS = new ExtractTextPlugin('style.css');

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录

module.exports = {
    entry: {
        index:APP_PATH+'/index.js',
        // util:APP_PATH+'/util/jquery-3.2.1.min.js', n
    },
    output: {
        path: __dirname+'/public',//编译到指定根目录 n
        filename: 'js/[name].js',//编译后的js存放地址与名称[chunkhash:4]
        publicPath:"/",
        chunkFilename:'js/[name].[chunkhash:4].js'
    },
    devServer: {
        // host: '10.1.4.159',
        inline: true,
        port: 7777,
        colors: true
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),// extractLESS,extractCSS,
        //js打包工具
        /*new webpack.optimize.CommonsChunkPlugin({
            filename:'js/util.js',
            name:['util'],
        }),*/
        new HtmlWebpackPlugin({//根据模板插入css/js等生成最终HTML n
            filename: 'index.html', //生成的html存放路径，相对于 path
            template: './src/index.html', //html模板路径
            inject: 'body',
            hash: true,
        }),
    ],
    // devtool: 'source-map',//开发调试使用，上线删除
    module: {
        rules: [
            {
                /*test: /\.js$/,
                include: [APP_PATH],
                use:'babel-loader?presets[]=es2015&presets[]=react',*/
                test: /\.js$/,
                include: [APP_PATH],
                // use:'babel-loader?presets[]=es2015&presets[]=react',
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react','stage-1'],
                        plugins: ['transform-decorators-legacy']
                    }
                },
            },{
                test: /\.css$/,
                include: [APP_PATH],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },{
                include: [APP_PATH],
                test:  /\.less$/i,
                use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
            },{
                include: [APP_PATH],
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=8192&name=images/[hash:4].[name].[ext]'
            }
        ]
    },
    resolve: {
        // extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
};