import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import { Provider } from 'react-redux'
import store from './redux/store'

// connect ot html 'app' element
ReactDOM.render(
<Provider store={store}>
  <Main />
</Provider>
, document.getElementById('app'))
// have our react routes
