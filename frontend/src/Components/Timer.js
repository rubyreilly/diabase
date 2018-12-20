import React, { Component } from 'react';
import Countdown from 'react-countdown-now';


class Timer extends Component{

  calculateTimeLeft=()=>{
    const start = this.props.entryObj.entry_date_and_time

    const duration_min = this.props.insulinObj.insulin_duration_in_minutes
    const duration_sec = duration_min * 60
    const duration = duration_sec * 1000

    return(<div  id='clock'><h1 id='clock'><Countdown date={new Date(start).getTime() + duration} /></h1></div>)
  }

  render(){


    return(
      <div className='ui black inverted segment' >{this.calculateTimeLeft()}</div>
    )
  }
}

export default Timer
