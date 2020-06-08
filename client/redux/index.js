import { combineReducers } from 'redux'
import userReducer from './userReducer'
//import other reducers from redux folder

const appReducer = combineReducers({
  //this is where we connect our reducers from the redux folder
  user: userReducer
  //reducerB : reducerB
})

export default appReducer
