const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {

    devtool:'sourc-map',

    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },

    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'tandard-loader',
              options: {
                parser: 'babel-eslint'
              }
            }
        ],

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

     plugins: [htmlPlugin]
}