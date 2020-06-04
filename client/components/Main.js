import React from 'react'
import { connect } from 'react-redux'

const Main = (props) => {
const { dogs } = props
  return(
    <div>VICTORY!!!!<br/>
      {dogs}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dogs: state.reducerA.dogs
  }
}

export default connect(mapStateToProps)(Main)
