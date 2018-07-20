'use strict'

const path = require('path')

module.exports = {
    devtool: 'source-map', //Debugar
    
    entry: path.join(__dirname, 'src', 'index'),
    
    output: {
        path: path.join(__dirname, 'dist'),
        
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    
    // Comfiguração do BABEL
      module: {
        rules: [{
           test: /\.js$/,
           exclude: /node_modules/,
           include: /src/,
           loader: 'babel-loader'
    }]
  }
}
