import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import css from '../public/style.css'
import Main from './components/Main'
import store from './redux/store'

// connect ot html 'app' element
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
// have our react routes
