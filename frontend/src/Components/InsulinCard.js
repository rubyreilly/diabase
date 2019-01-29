import React from 'react';
import moment from 'moment'
import {momentDurationFormatSetup} from 'moment-duration-format'
import {connect} from 'react-redux'
import {deleteInsulin, removeInsulin} from '../Redux/actions'


const InsulinCard = (props)=>{
  const handleDelete=(e)=>{
    props.removeInsulin(props.insulinObj)
    props.deleteInsulin(props.insulinObj)
  }

  // handleUpdate=(e)=>{
  //   props.updateInsulin(props.insulinObj)
  // }


    const formattedDuration= moment.duration(props.insulinObj.insulin_duration_in_minutes, "minutes").format("h")
    return(
      <div className="column">
      <div className="ui center aligned red compact segment" >
      <p>{props.insulinObj.insulin_name}</p>
      <p>{formattedDuration} hour duration</p>
      <button onClick={(e)=>handleDelete(e)}>delete</button>
      </div>
      </div>
    )

}

const mapDispatchToProps=(dispatch)=>{
  return{
    deleteInsulin:(insulinObj)=>dispatch(deleteInsulin(insulinObj)),
    removeInsulin:(insulinObj)=>dispatch(removeInsulin(insulinObj)),
    // updateInsulin: (insulinObj)=>dispatch(updateInsulin(insulinObj))
  }
}

export default connect(null, mapDispatchToProps)(InsulinCard)
