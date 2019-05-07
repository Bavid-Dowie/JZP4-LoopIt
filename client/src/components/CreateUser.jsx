import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

const url = `https://localhost:3000/users/register`

export default class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      username: "",
      bio: ""
    }
    this.onUserCreate = this.onUserCreate.bind(this)
    this.onUserSubmit = this.onUserSubmit.bind(this)
  }

  onUserCreate = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  onUserSubmit = async (event) => {
    event.preventDefault()
    let data = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      bio: this.state.bio,
    }

    localStorage.setItem('userInfo', JSON.stringify(data))

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(response => {
        localStorage.setItem('jwt', response.token);
        this.props.decodeToken(response.token)
      })
  }


  render() {
    if (this.props.userObject !== null) { return <Redirect to={`/users/${this.state.username}`} /> }
    return (
      <div className="register">
        <div className="register__form-container">
          <div className="register__title">Register</div>
          <form onSubmit={this.onUserSubmit} className="register__form" id="userProfile">
            <div className="register__field">
              <label htmlFor="name" className="register__field-label">name </label>
              <input onChange={this.onUserCreate}
                className="register__field-input"
                type="text"
                name="name"
                placeholder="enter name"
                value={this.state.name}
              />
            </div>
            <div className="register__field">
              <label htmlFor="email" className="register__field-label">email </label>
              <input onChange={this.onUserCreate}
                className="register__field-input"
                type="text"
                name="email"
                placeholder="enter email"
                value={this.state.email}
              />
            </div>
            <div className="register__field">
              <label htmlFor="username" className="register__field-label">username </label>
              <input onChange={this.onUserCreate}
                className="register__field-input"
                type="text"
                name="username"
                placeholder="enter username"
                value={this.state.username}
              />
            </div>
            <div className="register__field">
              <label htmlFor="password" className="register__field-label">password </label>
              <input onChange={this.onUserCreate}
                className="register__field-input"
                type="password"
                name="password"
                placeholder="enter password"
                value={this.state.password}
              />
            </div>
            <div className="register__field">
              <label htmlFor="bio" className="register__field-label">bio </label>
              <input onChange={this.onUserCreate}
                className="register__field-input"
                type="text"
                name="bio"
                placeholder="enter bio"
                value={this.state.bio}
              />
            </div>
            <div className="register__field">
              <label htmlFor="photo" className="register__field-label">photo </label>
              <input onChange={this.onUserCreate}
                className="register__field-input"
                type="text"
                name="photo"
                placeholder="enter image address"
                value={this.state.photo}
              />
            </div>
            <button input="field" type="submit" className="register__button">Create Your Profile</button>
          </form>
        </div>
      </div>
    )
  }
}
