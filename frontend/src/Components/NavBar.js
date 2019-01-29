import React from 'react';
import { Link, NavLink } from "react-router-dom";
// import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {logInOut} from '../Redux/actions'



const NavBar = (props)=>{

  const logout = () => {
    props.logInOut(false)
  }

    const username = props.user.username

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
<li className='nav-item'>{ props.loggedIn ? <button onClick={logout}>Logout</button > : null }

</li>
      </Link>

      </ul>
    )
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
