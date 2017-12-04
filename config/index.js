const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        login: ['./js/login.js'],
        favorate: ['./js/favorate.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['login'],
            filename: './login.html',
            template: './login.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['favorate'],
            filename: './favorate.html',
            template: './favorate.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new webpack.ProvidePlugin({
				  $: "jquery",
				  jQuery: "jquery",
				  "window.jQuery": "jquery"
				}),
        new webpack.DefinePlugin({
            'isProd': process.env.NODE_ENV === 'production',
        })
        // new CopyWebpackPlugin([
            // { from: 'images', to: 'images' },
            // { from: 'css', to: 'assets/css' },
            // { from: 'js', to: 'js' },
            // { from: 'evaluate.html', to: 'evaluate.html' },
            // { from: 'tableData.html', to: 'tableData.html' },
            // { from: 'orderData.html', to: 'orderData.html' },
            // { from: 'turnover.html', to: 'turnover.html' }
        // ])        
    ]
}