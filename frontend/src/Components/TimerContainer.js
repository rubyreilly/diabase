import React from 'react';
import TimerCard from './TimerCard'
import {connect} from 'react-redux'

const TimerContainer = (props)=>{

  const generateTimerCards = ()=>{
      const insulins = props.insulins

      return insulins.map(insulin=>{
        return insulin.all_associated_entries.map(entryObj=>{
            if (entryObj.status === 'active'){

              return <TimerCard entryObj={entryObj} insulinObj={insulin} key={entryObj.id}/>
            }else{
              return null
            }
          }
          )
        })
      }

    return(

      <div id='timers'>

      {generateTimerCards()}
      </div>
    )
  }


const mapStateToProps= (state)=>{
  return {
    insulins: state.insulins,
  }
}

export default connect(mapStateToProps)(TimerContainer)
