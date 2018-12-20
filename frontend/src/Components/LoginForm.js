import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchUser, logInOut} from '../Redux/actions'
import { withRouter, Link } from "react-router-dom";




class LoginForm extends Component{
  state={
    username:''
    // password:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleLogin=(e)=>{
    e.preventDefault()
    // console.log(this.props.users)
    // const user = this.props.users.find((user)=>user.username === this.state.username)
    this.props.fetchUser(this.state.username)
    // console.log("U ID", user.id)
    // this.props.fetchInsulins(user.id)
    this.props.logInOut(true)

    this.props.history.push("/home")  }

  render(){
    return(
      <div id='home'>
      <div className='outer-column'></div>

      <div>
      <div className="ui center aligned segment" id='user-form'>
      <h1>Login</h1>
      <form className="ui form" onSubmit={e=>this.handleLogin(e)}>

      <div className= "inline field">
      <label>username:</label>
      <input name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}></input>
      </div>

      <button>login</button>
      </form>

      </div>



<div id='sign-up-link'>
            <Link to="/signup">
            New to DiaBase? Sign up!
            </Link>

            </div>

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
    // setUser:(user)=>dispatch(setUser(user)),
    fetchUser:(username)=>dispatch(fetchUser(username)),
    logInOut:(loggedIn)=>dispatch(logInOut(loggedIn))

  }
}


export default withRouter(connect(null, mapDispatchToProps)(LoginForm))
// export default LoginForm
