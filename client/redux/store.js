import { createStore, applyMiddleware } from 'redux'
import appReducer from './index'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

let middleware = [thunkMiddleware]
//process.browser to check if we are in a browser
if (process.browser) {
  // We'd like the redux logger to only log messages when it's running in the
  // browser, and not when we run the tests from within Mocha.
  middleware = [...middleware, createLogger({ collapsed: true })]
}

const store = createStore(
  appReducer,
  composeWithDevTools(
        applyMiddleware(
      ...middleware
    )
  )

)

export default store


