import React, { Component } from 'react';
import moment from 'moment'
import {connect} from 'react-redux'
import {deleteEntry, removeEntry} from '../Redux/actions'
import Countdown from 'react-countdown-now';
// import EditEntryForm from './EditEntryForm'


class LogEntry extends Component{

  state = {
    selected: false
  }

  calculateTimeLeft=()=>{
    const start = this.props.entryObj.entry_date_and_time
    const duration_min = this.props.insulinObj.insulin_duration_in_minutes
    const duration_sec = duration_min * 60
    const duration = duration_sec * 1000
    return(<Countdown date={new Date(start).getTime() + duration} />)
  }


  calculateEndTime=(start)=>{
    const duration = this.props.insulinObj.insulin_duration_in_minutes
    return moment(start).add(duration, 'minutes').format()
  }

  handleDelete=(e)=>{
    this.props.removeEntry(this.props.entryObj)
    this.props.deleteEntry(this.props.entryObj)
  }

  handleEdit = ()=>{
    this.setState({selected:!this.state.selected})
    // if (this.state.selected===true){
    //   return(<EditEntryForm entryObj= {this.props}/>)
    // }
  }
  //
  // handleUpdate=(e)=>{
  //   this.props.updateEntry(this.props.entryObj)
  // }




  render(){
    const {entryObj}=this.props

    const formattedDate = moment(entryObj.entry_date_and_time).format('dddd MMMM Do')
    const formattedStartTime = moment(entryObj.entry_date_and_time).format('LT')
    const formattedEndTime = moment(this.calculateEndTime(entryObj.entry_date_and_time)).calendar()
    const timeLeft = this.calculateTimeLeft()



    return(
      <tr id={entryObj.status === "active" ? "entry" : null}>


      <td data-label="date">{formattedDate}</td>
      <td data-label="start-time">{formattedStartTime}</td>


      <td data-label="end_time">{entryObj.status === "active" ? formattedEndTime : "-"}</td>
      <td data-label="time_left">{entryObj.status === "complete" ? "-":timeLeft}</td>

      <td data-label="bloodSugar">{entryObj.current_blood_sugar !== null ? entryObj.current_blood_sugar : "-"}</td>
      <td data-label="numUnits">{entryObj.num_units_insulin !== null ? entryObj.num_units_insulin : "-"}</td>

      <td data-label="note">{entryObj.note === "" || entryObj.note === null ? "-":entryObj.note}</td>


      <td data-label="status">{entryObj.status}</td>

        <td>
      <button onClick={(e)=>this.handleDelete(e)}>delete</button></td>


      </tr>



    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    deleteEntry:(entryObj)=>dispatch(deleteEntry(entryObj)),
    removeEntry:(entryObj)=>dispatch(removeEntry(entryObj)),
    // updateEntry:(entryObj)=>dispatch(updateEntry(entryObj))
  }
}

export default connect(null, mapDispatchToProps)(LogEntry)
