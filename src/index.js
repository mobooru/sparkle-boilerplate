import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import * as defaultStates from './defaultStates'

import App from 'Containers/App.jsx'

import Diluter from 'Diluter'
const store = new Diluter(defaultStates)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
