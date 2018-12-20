import React, { Component } from 'react';
import HomeContainer from './Components/HomeContainer'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import LoginForm from './Components/LoginForm'
import SignUp from './Components/SignUp'

import AccountForm from './Components/AccountForm'
import { BrowserRouter, Route, Switch} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux'
import {logInOut} from './Redux/actions'

import './App.css';

class App extends Component {


  logout = () => {
    this.props.logInOut(false)
    }

  render() {

    return (
      <BrowserRouter>

      <div >

       {this.props.loggedIn ?
        <div className="ui three column grid">
          <div className="column">
            <NavBar/>
          </div>
        <div className="column">
          <Header/>
        </div>
        </div>
        :
          <Header/>

      }



      {this.props.loggedIn ?
        <div className='main'>
      <Switch>


            <Route path="/account" component={AccountForm} />

            <Route path="/home" component={HomeContainer} />
            </Switch>
            </div>
              :
              <div className='main'>
              <Switch>

              <Route
                  path="/signup"
                  render={props => <SignUp />}
                />

            <Route
              path="/"
                render={props => <LoginForm />}
              />
          </Switch>
            </div>
        }

      </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps=(state)=>{
  return{
    user: state.auth.currentUser,
    loggedIn : state.loggedIn
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    logInOut:(loggedIn)=>dispatch(logInOut(loggedIn)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
