console.log('Olá, webpack!')
console.log('Olá, webpack!!!!!!!')

'use strict'

import Title from "./App"
import React, { createElement } from "react"
import ReactDOM, { render } from "react-dom"

render(
    <Title />,
    document.querySelector('[data-js="app"]')
)




// ReactDOM.render(<App />, document.getElementById("root"))