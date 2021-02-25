import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'

import App from './app/App'
import { configureStore } from './app/store/configureSore'
import NavBar from './app/features/nav/Navbar'
import Head from './app/features/common/Head'

const store = configureStore()

const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Head />
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  )
}

render()
