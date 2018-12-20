import React, { Component } from 'react';
import TimerCard from './TimerCard'
import {connect} from 'react-redux'

class TimerContainer extends Component{



  generateTimerCards = ()=>{
      const insulins = this.props.insulins

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

  render(){
    return(

      <div id='timers'>

      {this.generateTimerCards()}
      </div>
    )
  }
}

const mapStateToProps= (state)=>{
  return {
    insulins: state.insulins,
  }
}

export default connect(mapStateToProps)(TimerContainer)
