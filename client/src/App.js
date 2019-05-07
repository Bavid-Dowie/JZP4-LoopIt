import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Redirect, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Homepage from './components/Homepage'
import Session from './components/Session'
import Sessions from './components/Sessions'
import UserProfile from './components/UserProfile'
import CreateUser from './components/CreateUser'
import decode from 'jwt-decode'
import axios from 'axios'

import './App.css'

const url = `https://localhost:3000/sessions`
const userSessionsURL = `https://localhost:3000/usersessions/`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userObject: null,
      password: "",
      sessions: "",
      userSessions: [],
      audioFiles: ""
    }
    this.decodeToken = this.decodeToken.bind(this)
    this.loginChange = this.loginChange.bind(this)
    this.getSessions = this.getSessions.bind(this)
    this.renderSessions = this.renderSessions.bind(this)
  }

  decodeToken(token) {
    const userData = decode(token)
    this.setState({
      userObject: userData
    })
  }

  loginChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  async handleLoginSubmit() {
    try {
      const resp = await axios.post(`https://localhost:3000/users/login`, {
        username: this.state.username,
        password: this.state.password
      })
      localStorage.setItem('jwt', resp.data.token)
      this.decodeToken(resp.data.token)
    } catch (error) {
      console.log(error)
      alert("Invalid credentials try again")
      this.setState({ username: "", password: "" })
    }
  }

  getSessions() {
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ sessions: json }))
  }

  componentDidMount() {
    this.getSessions()
    const token = localStorage.getItem('jwt')
    if (token) {
      const decodedToken = decode(token)
      this.setState({ userObject: decodedToken })
    }
  }

  getUserSessions() {
    fetch(`${userSessionsURL}${this.state.userObject.id}`)
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

  logOut() {
    localStorage.removeItem("jwt");
    this.setState({
      userObject: null
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
                userObject={this.state.userObject}
                loginChange={this.loginChange}
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
                userObject={this.state.userObject}
                logOut={this.logOut}
              />}
          />
          <Route
            exact path='/home'
            render={() => <Redirect to="/" />}
          />
          <Route
            exact path='/users'
            render={() => <Redirect to="/" />}
          />
          <Route
            exact path='/sessions/:id'
            render={(props) =>
              <Session
                userObject={this.state.userObject}
                onSessionDelete={this.onSessionDelete}
                getSessions={this.getSessions}
                {...props} />}
          />
          <Route
            exact path='/sessions/'
            render={(props) =>
              <Sessions
                userObject={this.state.userObject}
                onSessionDelete={this.onSessionDelete}
                getSessions={this.getSessions}
                renderSessions={this.renderSessions}
                {...props}
              />}
          />
          <Route
            exact path='/create-profile'
            render={(props) =>
              <CreateUser
                {...props}
                decodeToken={this.decodeToken}
                userObject={this.state.userObject}
              />
            }
          />
        </Switch>

      </div>
    )
  }
}

export default withRouter(App);