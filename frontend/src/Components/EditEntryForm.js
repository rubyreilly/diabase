import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateEntry} from '../Redux/actions'
import moment from 'moment'


class EditEntryForm extends Component{

  state = {
    dayArray:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    monthArray: ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"],
    hourArray:['1','2','3','4','5','6','7','8','9','10','11','12'],
    minArray: [
              '00','01','02','03','04','05', '06', '07', '08', '09',
              '10','11','12','13','14','15', '16', '17', '18', '19',
              '20','21','22','23','24','25', '26', '27', '28', '29',
              '30','31','32','33','34','35', '36', '37', '38', '39',
              '40','41','42','43','44','45', '46', '47', '48', '49',
              '50','51','52','53','54','55', '56', '57', '58', '59'],


    hour: moment().format('LT').split(':')[0],
    minute: moment().format('LT').split(':')[1].split(' ')[0],
    amPm: moment().format('LT').split(':')[1].split(' ')[1],


    month: new Date().getMonth(),
    day: new Date().getDate(),
    year: new Date().getFullYear() ,


    note:'',
    bloodSugar:'',
    numUnits:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  formatDateTime=()=>{
    let month_to_str = this.state.month
    if (typeof this.state.month==="number"){
      month_to_str = this.state.monthArray[this.state.month]
    }
    const time_to_str = `${this.state.hour}:${this.state.minute} ${this.state.amPm}`
    const datetime_combined = new Date(`${month_to_str} ${this.state.day} ${this.state.year} ${time_to_str}`)

    return datetime_combined.toISOString()

  }

  handleSubmit=(e)=>{
    e.preventDefault()
    // const insulinObj=this.props.insulins.find((insulin)=>{
    //   return insulin.insulin_name == this.state.insulin
    // })

    const editedEntry = {
      user_id: this.props.user.id,
      entry_date_and_time: this.formatDateTime(),
      insulin_id : this.props.entryObj.insulin,
      status: 'active',
      note: this.state.note,
      current_blood_sugar: this.state.bloodSugar,
      num_units_insulin: this.state.numUnits}
    this.props.updateEntry(editedEntry)

  }


  generateMonthDropDown=()=>{
    return this.state.monthArray.map(month=>{
      return <option>{month}</option>
    })
  }

  generateDayDropDown=()=>{
    return this.state.dayArray.map(day=>{
      return <option>{day}</option>
    })
  }

  generateHourDropDown=()=>{
    return this.state.hourArray.map(hour=>{
      return <option>{hour}</option>
    })
  }

  generateMinDropDown=()=>{
    return this.state.minArray.map(minute=>{
      return <option>{minute}</option>
    })
  }


  render(){
    const {entryObj} = this.props.entryObj

    return(
      <form onSubmit={(e)=>this.handleSubmit(e)}>

      <td data-label="date">

        <select name='month' value={this.state.monthArray[this.state.month]} onChange={(e)=>this.handleChange(e)}>
        {this.generateMonthDropDown()}
        </select>


        <select name='day' value={this.state.day} onChange={(e)=>this.handleChange(e)}>
        {this.generateDayDropDown()}
        </select>
        </td>


        <td data-label="start-time">
        <select name='hour' value={this.state.hour} onChange={(e)=>this.handleChange(e)}>
        {this.generateHourDropDown()}
        </select>
        <p>:</p>

        <select name='minute' value={this.state.minute} onChange={(e)=>this.handleChange(e)}>

        {this.generateMinDropDown()}
        </select>



        <select name='amPm' value={this.state.amPm} onChange={(e)=>this.handleChange(e)}>
        <option>AM</option>
        <option>PM</option>
        </select>
        </td>

        <td data-label="end_time">{"-"}</td>
        <td data-label="time_left">{"-"}</td>

        <td data-label="bloodSugar">
        <label>blood sugar</label>
        <input name='bloodSugar' value={this.state.bloodSugar} placeholder='#' onChange={(e)=>this.handleChange(e)}></input>
        </td>

        <td data-label="numUnits">
        <label>units</label>
        <input name='numUnits' value={this.state.numUnits} placeholder='#' onChange={(e)=>this.handleChange(e)}></input>
        </td>


      <td data-label="note">
      <label>note</label>
        <textarea rows="1" name='note' value={this.state.note} placeholder='note...' onChange={(e)=>this.handleChange(e)}></textarea>
        </td>

        <td data-label="status">{entryObj.status}</td>
        <td>
          <button onClick={(e)=>this.handleUpdate(e)}>update</button>
          <button onClick={()=>this.handleEdit()}>cancel</button></td>

      </form>


    )
  }
}



const mapStateToProps=(state)=>{
  return{
    user:state.auth.currentUser
}
}

const mapDispatchToProps=(dispatch)=>{
  return{
updateEntry:(entryObj)=>dispatch(updateEntry(entryObj))  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditEntryForm)
