import React, { Component } from 'react'

// This component handles our register form
class Register extends Component {
  render() {
    return (
      <div className="auth-container">
        <h2>register</h2>
        <hr />
        <form onSubmit={this.props.handleRegister}>
          <p>Name:</p>
          <input name="name" type="text" value={this.props.formData.name} onChange={this.props.handleChange} />
          <p>Email:</p>
          <input name="email" type="text" value={this.props.formData.email} onChange={this.props.handleChange} />
          <p>Username:</p>
          <input name="username" type="text" value={this.props.formData.username} onChange={this.props.handleChange} />
          <p>Password:</p>
          <input name="password" type="password" value={this.props.formData.password} onChange={this.props.handleChange} />
          <hr />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;