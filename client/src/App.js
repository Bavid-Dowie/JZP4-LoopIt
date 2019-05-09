import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import decode from 'jwt-decode'

import Header from './components/Header'
import Session from './components/Session'
import Sessions from './components/Sessions'
import UserProfile from './components/UserProfile'
import Register from './components/Register'
import Login from './components/Login'

import {
  loginUser,
  registerUser,
  createSession,
  readSessions,
  updateSession,
  destroySession
} from './services/api-helper'

import './App.css'
import PlaySession from './components/PlaySession';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      sessions: [],
      userSessions: [],
      audioFiles: "",
      photo: "",
      authFormData: {
        name: "",
        email: "",
        username: "",
        password_digest: ""
      },
      loginFormData: {
        username: "",
        password: ""
      },
      sessionForm: {
        title: "",
        audio_files: ""
      }
    }
    this.decodeToken = this.decodeToken.bind(this)
    this.authHandleChange = this.authHandleChange.bind(this)
    this.loginHandleChange = this.loginHandleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLoginButton = this.handleLoginButton.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.getSessions = this.getSessions.bind(this)
    this.newSession = this.newSession.bind(this)
    this.editSession = this.editSession.bind(this)
    this.deleteSession = this.deleteSession.bind(this)
  }
  // userData.id to test with front end CRUD

  decodeToken(token) {
    const userData = decode(token)
    this.setState({
      currentUser: userData.id
    })
    console.table(userData.id)
  }

  componentDidMount() {
    this.getSessions()
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  async getSessions() {
    const sessions = await readSessions();
    this.setState({
      sessions
    })
  }

  async newSession(e) {
    e.preventDefault();
    const session = await createSession(this.state.sessionForm);
    this.setState(prevState => ({
      sessions: [...prevState.sessions, session],
      sessionForm: {
        title: "",
        audio_files: ""
      }
    }))
  }

  async editSession() {
    const { sessionForm } = this.state
    await updateSession(sessionForm.id, sessionForm);
    this.setState(prevState => (
      {
        sessions: prevState.sessions.map(
          session => session.id
            ===
            sessionForm.id
            ?
            sessionForm
            :
            session
        ),
      }
    ))
  }

  async deleteSession(id) {
    await destroySession(id);
    this.setState(prevState => ({
      sessions: prevState.sessions.filter(session => session.id !== id)
    }))
  }
  // update to handleSessionChange
  handleSessionChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      sessionForm: {
        ...prevState.sessionForm,
        [name]: value
      }
    }))
  }

  async mountEditForm(id) {
    const sessions = await readSessions();
    const session = sessions.find(el => el.id === parseInt(id));
    this.setState({
      sessionForm: session
    });
  }

  handleLoginButton() {
    this.props.history.push("/login")
  }

  loginHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => (
      {
        loginFormData: {
          ...prevState.loginFormData,
          [name]: value
        }
      }
    ))
  }

  async handleLogin() {
    const userData = await loginUser(this.state.loginFormData)
    const token = decode(userData.token);
    this.setState({
      currentUser: token
    })
    localStorage.setItem("jwt", token)
  }

  async handleRegister() {
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => (
      {
        authFormData: {
          ...prevState.authFormData,
          [name]: value
        }
      }
    ))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {this.state.currentUser
            ?
            <>
              <h3>`Welcome {this.state.currentUser.username}`</h3>
              <button onClick={this.handleLogout}>logout</button>
            </>
            :
            <button className="logregbutton" onClick={this.handleLoginButton}>Login/register</button>
          }
          <PlaySession />
        </div>


        <Route exact path="/login" render={(props) => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.loginHandleChange}
            formData={this.state.loginFormData} />)} />
        <Route exact path="/register" render={(props) => (
          <Register
            {...props}
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            currentUser={this.state.currentUser}
            decodeToken={this.decodeToken}
            formData={this.state.authFormData} />)} />
        <Route
          exact path='/users/:username'
          render={(props) =>
            <UserProfile
              {...props}
              getUserSessions={this.getUserSessions}
              renderUserSessions={this.renderUserSessions}
              currentUser={this.state.currentUser}
              handleLogout={this.handleLogout}
            />}
        />
        <Route
          exact path='/sessions/:id'
          render={(props) =>
            <Session
              currentUser={this.state.currentUser}
              onSessionDelete={this.onSessionDelete}
              {...props} />}
        />
        <Route
          exact path='/sessions/'
          render={(props) =>
            <Sessions
              currentUser={this.state.currentUser}
              onSessionDelete={this.onSessionDelete}
              renderSessions={this.renderSessions}
              {...props}
            />}
        />

      </div>
    )
  }
}

export default withRouter(App);