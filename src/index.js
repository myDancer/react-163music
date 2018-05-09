import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line
import './config/mock'

import reducers from './redux/'

import App from './views/app/'
import './common/style/reset.css'
import './common/style/fonts.css'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>
  , document.getElementById('root'),
)
