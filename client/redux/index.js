import { combineReducers } from 'redux'
import reducerA from './testReducer'
//import other reducers from redux folder

const appReducer = combineReducers({
  //this is where we connect our reducers from the redux folder
  reducerA : reducerA
  //reducerB : reducerB
})

export default appReducer
