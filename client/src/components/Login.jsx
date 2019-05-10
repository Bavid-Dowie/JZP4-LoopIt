import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './Login.css'

class Login extends Component {
  render() {
    return (
      <div className="auth-container">
        <h2>login</h2>
        <hr />
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin();
        }} >
          <p>Username: </p>
          <input name="username" type="text" value={this.props.formData.username} onChange={this.props.handleChange} />
          <p>Password: </p>
          <input name="password" type="password" value={this.props.formData.password} onChange={this.props.handleChange} />
          <hr />
          <button className="Login-button">Login</button>
          <Link className="Register-button" to="/register">
            <button>Register</button>
          </Link>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);