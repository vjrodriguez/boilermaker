import axios from 'axios'

//action type:
const GET_ME = 'GET_ME'

//action creator:
const getMe = (something) => ({
  type: GET_SOMETHING,
  something
})

//initial state

const reducer = (state = {dogs:[3]} , action) => {
  switch (action.type) {
    case GET_SOMETHING:
      return {...state, dogs: action.something}
    default :
      return state
  }
}

export default reducer
