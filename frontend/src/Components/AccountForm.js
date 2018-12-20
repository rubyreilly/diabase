import React, { Component } from 'react';
import InsulinForm from './InsulinForm'
import MyInsulins from './MyInsulins'
import {connect} from 'react-redux'
import {updateUser} from '../Redux/actions'



class AccountForm extends Component{

  state={
    username: this.props.user.username
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const userData={
      id:this.props.user.id,
      username: this.state.username}

    this.props.updateUser(userData)
  }


  render(){
    return(
      <div id='home'>
      <div>


        <div className="ui center aligned segment" id='user-edit-form'>
     <h1>Edit Account</h1>
      <form className="ui form" onSubmit={(e)=>this.handleSubmit(e)}>
      <div className= "inline field">
      <label>username:</label>
      <input name='username' value={this.state.username} placeholder={this.props.user.username} onChange={(e)=>this.handleChange(e)}></input>
      </div>

      <button>update</button>
      </form>
      </div>
      </div>

<div className="ui center aligned segment" id='ins-form'>
      <InsulinForm/></div>
<div className="ui center aligned segment" id='my-ins'>
      <MyInsulins/></div>
      </div>


    )
  }
}

const mapStateToProps=(state)=>{
  return{
    user:state.auth.currentUser}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    updateUser:(userData)=>dispatch(updateUser(userData)),
    // postNewUser:(username)=>dispatch(postNewUser(username))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(AccountForm)
