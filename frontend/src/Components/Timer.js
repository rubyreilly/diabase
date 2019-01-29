import React from 'react';
import Countdown from 'react-countdown-now';


const Timer = (props)=>{

  const calculateTimeLeft=()=>{
    const start = props.entryObj.entry_date_and_time

    const duration_min = props.insulinObj.insulin_duration_in_minutes
    const duration_sec = duration_min * 60
    const duration = duration_sec * 1000

    return(<div  id='clock'><h1 id='clock'><Countdown date={new Date(start).getTime() + duration} /></h1></div>)
  }

    return(
      <div className='ui black inverted segment' >{calculateTimeLeft()}</div>
    )
  }


export default Timer
