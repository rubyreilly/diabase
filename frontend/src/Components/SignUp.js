import React, { Component } from 'react';
// import InsulinForm from './InsulinForm'
// import MyInsulins from './MyInsulins'

import {connect} from 'react-redux'
import {fetchUser, logInOut} from '../Redux/actions'
import { withRouter } from "react-router-dom";

class SignUp extends Component{

  state={
    username:''

  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }


  handleSignUp = (e) => {
    e.preventDefault()
    // const newUser = this.state.username
    // this.props.postNewUser(this.state.username)
    this.props.fetchUser(this.state.username)
    this.props.logInOut(true)

    this.props.history.push("/account")
    // .then(resp => localStorage.setItem("token", resp.token));
  // resp => localStorage.setItem("token", resp.token)
};


  // handleSubmit=(e)=>{
  //   e.preventDefault();
  //    this.handleSignUp();
  //    this.props.history.push("/home");
  // }



  render(){
    return(

      <div id='home'>
      <div className='outer-column'></div>
      <div className="ui center aligned red segment" id='user-form'>


     <h1>Sign Up</h1>
      <form className="ui form" onSubmit={(e)=>this.handleSignUp(e)}>

      <div className= "inline field">
      <label>username:</label>
      <input name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}></input>
      </div>


      <button>Sign Up</button>

      </form>

      </div>
      <div className='outer-column'></div>
      </div>

    )
  }
}

// const mapStateToProps= (state)=>{
//   return {
//     users: state.users
//   }
// }


const mapDispatchToProps=(dispatch)=>{
  return{
    fetchUser:(username)=>dispatch(fetchUser(username)),
    logInOut:(loggedIn)=>dispatch(logInOut(loggedIn))

    // postNewUser:(username)=>dispatch(postNewUser(username))
  }
}


export default withRouter(connect(null, mapDispatchToProps)(SignUp))


// export default SignUp
