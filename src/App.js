import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth/Auth.js';
import {NavBar} from './Component/NavBar.js';

const auth = new Auth();
// auth.login();

class App extends Component {

  goTo(route) {
  this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    return (
      <div className="App">
      <NavBar/>
      </div>
    );
  }
}

export default App;
