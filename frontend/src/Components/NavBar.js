import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
// import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {logInOut} from '../Redux/actions'



class NavBar extends Component{

  logout = () => {
    this.props.logInOut(false)
  }

  render(){
    const username = this.props.user.username

    return(

      <ul id='nav-bar'>

      <Link to="/home">
      <li className='nav-item'>
      Home
      </li>
      </Link>

      <Link to="/account">
      <li className='nav-item'>
      Settings
      </li>
      </Link>


      <Link to="/">
<li className='nav-item'>{ this.props.loggedIn ? <button onClick={this.logout}>Logout</button > : null }

</li>
      </Link>

      </ul>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    user: state.auth.currentUser,
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    logInOut:(loggedIn)=>dispatch(logInOut(loggedIn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
