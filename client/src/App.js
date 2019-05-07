import React, { Component } from 'react'
import { BrowserRouter as Switch, Route, Redirect, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { loginUser, registerUser } from './services/api-helper'
// import AuthForm from './components/AuthForm'
import decode from 'jwt-decode'
import Homepage from './components/Homepage'
import Session from './components/Session'
import Sessions from './components/Sessions'
import UserProfile from './components/UserProfile'
import CreateUser from './components/CreateUser'

import './App.css'

const url = `https://localhost:3000/sessions`
const userSessionsURL = `https://localhost:3000/usersessions/`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      password: "",
      sessions: "",
      userSessions: [],
      audioFiles: "",
      createForm: {
        email: '',
        password: ''
      }
    }
    this.decodeToken = this.decodeToken.bind(this)
    this.handleAuthChange = this.handleAuthChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this);
    this.getSessions = this.getSessions.bind(this)
    this.renderSessions = this.renderSessions.bind(this)
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this)
  }
// userData.id to test with front end CRUD
  decodeToken(token) {
    const userData = decode(token)
    this.setState({
      userObject: userData.id
    })
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    if (token) {
      const userData = decode(token);
      this.setState({
        currentUser: userData
      })
    }
  }

  handleAuthChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => (
      {
        createForm: {
          ...prevState.createForm,
          [name]: value
        }
      }
    ))
  }

  async handleRegister() {
    await registerUser(this.state.createForm);
    this.handleLogin();
  }

  async handleLogin() {
    const token = await loginUser(this.state.createForm)
    const userData = decode(token.jwt);
    this.setState({
      currentUser: userData
    })
    localStorage.setItem("jwt", token.jwt)
  }

  getSessions() {
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ sessions: json }))
  }

  getUserSessions() {
    fetch(`${userSessionsURL}${this.state.currentUser.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ userSessions: data })
      })
  }

  renderSessions() {
    if (Array.isArray(this.state.sessions) === true)
      return this.state.sessions.map(session => {
        return (
          <div className="sessions__session" key={session.id}>
            <Link to={`/sessions/${session.id}`}><div>
              <p className="sessions__session--title">{session.title}</p>
              <p className="sessions__session--user"> by {session.user}</p>
            </div></Link>
          </div>
        )
      })
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={(props) =>
              <Homepage
                handleLoginSubmit={this.handleLoginSubmit}
                currentUser={this.state.currentUser}
                handleAuthChange={this.handleAuthChange}
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
                username={this.state.username}
                password={this.state.password}
              />}
          />
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
            exact path='/home'
            render={() => <Redirect to="/" />}
          />
          <Route
            exact path='/sessions/:id'
            render={(props) =>
              <Session
                currentUser={this.state.currentUser}
                onSessionDelete={this.onSessionDelete}
                getSessions={this.getSessions}
                {...props} />}
          />
          <Route
            exact path='/sessions/'
            render={(props) =>
              <Sessions
                currentUser={this.state.currentUser}
                onSessionDelete={this.onSessionDelete}
                getSessions={this.getSessions}
                renderSessions={this.renderSessions}
                {...props}
              />}
          />
          <Route
            exact path='/register'
            render={(props) =>
              <CreateUser
                {...props}
                decodeToken={this.decodeToken}
                currentUser={this.state.currentUser}
              />
            }
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);