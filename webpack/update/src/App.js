'use strict'

// import React, { Component } from 'react'
// class App extends Component{
//     render(){
//         return <div>Olá, react</div>
//     }
// }
// const App = () => <h1>Hello World!</h1>
// export default App

 import React, { createClass, createElement } from 'react'
 import { hot } from 'react-hot-loader'

var Title = createClass({
    render(){
        return(
            <div>
                <h1>Gian seu lindo LINDO</h1> 
                <h2>Dal pont</h2>
                <p>Gian CArlos dal pont</p>
            </div>
        ) 
    }
})
export default hot(module)(Title)


/* Aula*/
/*
function sum (val1, val2) {
    return val1 + val2 
}
module.exports = sum 
*/
