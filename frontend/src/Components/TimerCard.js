import React from 'react';
import moment from 'moment'
import {momentDurationFormatSetup} from 'moment-duration-format'
// import Countdown from 'react-countdown-now';
import Timer from './Timer'

const TimerCard=(props)=>{

  // calculateTimeLeft=()=>{
  //   const start = this.props.entryObj.entry_date_and_time
  //
  //   const duration_min = this.props.insulinObj.insulin_duration_in_minutes
  //   const duration_sec = duration_min * 60
  //   const duration = duration_sec * 1000
  //
  //   return(<div id='clock' className='timer'><Countdown date={new Date(start).getTime() + duration} /></div>)
  // }


    const entryObj = props.entryObj
    const insulinObj = props.insulinObj

    const formattedDate = moment(entryObj.entry_date_and_time).format('dddd MMMM Do')
    const formattedStartTime = moment(entryObj.entry_date_and_time).format('LT')
    const formattedDuration= moment.duration(insulinObj.insulin_duration_in_minutes, "minutes").format("h")

    return(

      <div className="ui center aligned segment" id='timer-card'>

      <h3>{insulinObj.insulin_name} timer</h3>
      <Timer entryObj={entryObj} insulinObj={insulinObj}/>
      <p>of {formattedDuration} hours</p>

      <p>{formattedDate}</p>
      <p>{formattedStartTime}</p>

      </div>


    )
  }


export default TimerCard
