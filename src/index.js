import ReactDom from 'react-dom'
import React from 'react'
import TodoContainer from './todos/TodoContainer.js'

ReactDom.render(
    <TodoContainer />,
    document.getElementById('root')
)
