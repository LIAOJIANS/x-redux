import React from 'react'
import { render } from 'react-dom'
import App from './pages/app/app'


import store from './redux/store'

render(<App store = { store } />, document.getElementById('root'))
store.subscribe(function () {
    render(<App store = { store } />, document.getElementById('root'))
})
