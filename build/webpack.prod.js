/**
 * Created by Administrator on 2018/11/22 0022.
 */
const merge = require('webpack-merge')
const UglifyJSPPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJSPPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.SplitChunksPlugin(),
        new webpack.HashedModuleIdsPlugin()
    ]
})