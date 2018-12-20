import React, { Component } from 'react';
import {connect} from 'react-redux'
import {postInsulin} from '../Redux/actions'

class InsulinForm extends Component{

  state={
    insulinName:'',
    duration:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const newInsulin = {
      user_id: this.props.user.id,
      insulin_name: this.state.insulinName,
      insulin_duration_in_minutes : parseInt(this.state.duration)*60}
    this.props.postInsulin(newInsulin)
    this.setState({
      insulinName: '',
      duration:''
    })
  }



  render(){
    return(


      <div>
      <h1>New Insulin</h1>
      <form className="ui form" onSubmit={(e)=>this.handleSubmit(e)}>

      <div className= "inline field">
      <label>insulin name:</label>
      <input name='insulinName' value={this.state.insulinName} onChange={(e)=>this.handleChange(e)}></input>
      </div>

<div className= "inline field">
    <label>duration in hours:</label>
      <select name='duration' value={this.state.duration} onChange={(e)=>this.handleChange(e)}>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>12</option>
      <option>24</option>
      </select>
      </div>



      <button>add insulin</button>
      </form>
      </div>

    )
  }
}

const mapStateToProps=(state)=>{
  return{user:state.auth.currentUser}

}

const mapDispatchToProps=(dispatch)=>{
  return{
    postInsulin:(newInsulin)=>dispatch(postInsulin(newInsulin)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InsulinForm)
