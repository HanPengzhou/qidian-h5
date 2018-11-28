/**
 * Created by Administrator on 2018/11/22 0022.
 */
const path = require('path')
const utils = require('./utils')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    externals: {
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                include: projectRoot,
                exclude: /node_modules/,
                enforce: 'pre',
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: require('./vue-loader.conf')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                include: projectRoot,
                // /node_modules\/(?!vue-bulma-.*)/
                exclude: [new RegExp(`node_modules\\${path.sep}(?!vue-bulma-.*)`)]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            package: path.resolve(__dirname, '../package.json'),
            src: path.resolve(__dirname, '../src'),
            assets: path.resolve(__dirname, '../src/assets'),
            components: path.resolve(__dirname, '../src/components'),
            views: path.resolve(__dirname, '../src/views')
        }
    },

}