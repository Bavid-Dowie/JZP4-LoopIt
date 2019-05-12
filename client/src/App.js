import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import decode from 'jwt-decode'

import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Register from './components/Register'
import Login from './components/Login'

import {
  loginUser,
  registerUser,
  updateUser,
  destroyUser
} from './services/api-helper'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
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
      editFormData: {
        name: "",
        username: ""
      }
    }
    this.decodeToken = this.decodeToken.bind(this)
    this.authHandleChange = this.authHandleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLoginButton = this.handleLoginButton.bind(this)
    this.handleUpdateForm = this.handleUpdateForm.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  decodeToken(token) {
    const userData = decode(token)
    this.setState({
      currentUser: userData.id
    })
  }

  componentDidMount() {
    // this.getSessions()
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  async handleUpdateForm(e) {
    const { name, value } = e.target
    this.setState(prevState => ({
      editFormData: {
        ...prevState.editFormData,
        [name]: value
      }
    }))
  }

  async handleUpdateSubmit() {
    const updatedUser = await updateUser(this.state.currentUser.user_id, this.state.editFormData)
    this.setState(prevState => ({
      user: prevState.currentUser.map(e => e.id === this.state.currentUser.user_id ? updatedUser : e)
    }))
  }

  async deleteUser(id) {
    await destroyUser(id);
    this.setState({
      currentUser: null
    })
    localStorage.removeItem("jwt")
    this.props.history.push("/login")
  }

  // -------------- AUTH ------------------

  handleLoginButton() {
    this.props.history.push("/login")
  }

  async handleLogin() {
    const response = await loginUser(this.state.authFormData)
    const userData = decode(response.token);
    this.setState({
      currentUser: userData
    })
    localStorage.setItem("jwt", response.token)
    this.props.history.push(`/users/${this.state.currentUser.user_id}`)
  }

  async handleRegister(e) {
    e.preventDefault()
    await registerUser(this.state.authFormData);
    this.handleLogin()
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  async  authHandleChange(e) {
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
                <Link to={`users/@username`}>
                  <button id="buttonclick">Profile</button>
                </Link>
                <button id="buttonclick" onClick={this.handleLogout}>logout</button>
              </>
              :
              <button id="buttonclick" className="log-reg-button" onClick={this.handleLoginButton}>Login/register</button>
            }
          </div>

        <Route
          exact path="/login"
          render={(props) => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />
        <Route
          exact path="/register"
          render={(props) => (
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
              currentUser={this.state.currentUser}
              handleLogout={this.state.handleLogout}
              deleteUser={this.deleteUser}
              handleUpdateForm={this.handleUpdateForm}
              handleUpdateSubmit={this.handleUpdateSubmit}
              user={this.username}
            />}
        />
        {/* <PlaySession /> */}
      </div>
    )
  }
}

export default withRouter(App);