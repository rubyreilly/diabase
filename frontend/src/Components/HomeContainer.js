import React, { Component } from 'react';
import LogContainer from './LogContainer'
import NewEntryForm from './NewEntryForm'
import TimerContainer from './TimerContainer'
import {connect} from 'react-redux'
import {selectInsulin} from '../Redux/actions'




class HomeContainer extends Component{

  state = {
    formClicked: false
  }

  setDefaultTab=()=>{
    if (this.props.insulins.length !== 0){
      this.props.selectInsulin(this.props.insulins[0].id)
    }
  }

  render(){


    return(

      <div id='home'>

        <div id="timer-container">
      <TimerContainer/></div>

      <div id='log-container' className = "ui  segment">

      <div id='new-form-visible'>
      <div onClick = {()=>this.setState({formClicked:!this.state.formClicked})}>
      <button id='new-entry-btn'>{this.state.formClicked ?  "Close Form" : "New Entry"}</button>
      </div>


      {this.state.formClicked ? <NewEntryForm/> : null }
      </div>

      {this.setDefaultTab()}
      <div id='log'><LogContainer/></div>
      </div>

      </div>



    )
  }
}

const mapStateToProps=(state)=>{
  return{
    insulins:state.insulins
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    selectInsulin:(insulinId)=>dispatch(selectInsulin(insulinId))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
