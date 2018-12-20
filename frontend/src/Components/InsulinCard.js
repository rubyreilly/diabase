import React, { Component } from 'react';
import moment from 'moment'
import {momentDurationFormatSetup} from 'moment-duration-format'
import {connect} from 'react-redux'
import {deleteInsulin, removeInsulin} from '../Redux/actions'


class InsulinCard extends Component{
  handleDelete=(e)=>{
    this.props.removeInsulin(this.props.insulinObj)
    this.props.deleteInsulin(this.props.insulinObj)
  }

  // handleUpdate=(e)=>{
  //   this.props.updateInsulin(this.props.insulinObj)
  // }


  render(){
    const formattedDuration= moment.duration(this.props.insulinObj.insulin_duration_in_minutes, "minutes").format("h")
    return(
      <div className="column">
      <div className="ui center aligned red compact segment" >
      <p>{this.props.insulinObj.insulin_name}</p>
      <p>{formattedDuration} hour duration</p>
      <button onClick={(e)=>this.handleDelete(e)}>delete</button>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    deleteInsulin:(insulinObj)=>dispatch(deleteInsulin(insulinObj)),
    removeInsulin:(insulinObj)=>dispatch(removeInsulin(insulinObj)),
    // updateInsulin: (insulinObj)=>dispatch(updateInsulin(insulinObj))
  }
}

export default connect(null, mapDispatchToProps)(InsulinCard)
