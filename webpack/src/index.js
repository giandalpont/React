// console.log('webpack está funcionando!!')

'user strict'

// var sum = require('./App')
// console.log( sum(3, 3))

var React = require('react')
var ReactDOM = require('react-dom')
var Title = require('./App')

// ReactDOM.render(
//     React.createElement(Title),
//     document.querySelector('[data-js="App"]')
// )

ReactDOM.render( Title, document.querySelector('[data-js="App"]'))
