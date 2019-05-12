import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import CreateSession from './CreateSession'
import UpdateUserForm from './UpdateUserForm';
import { Link, Redirect } from 'react-router-dom'

class UserProfile extends Component {

  componentDidMount() {
    // this.props.handleLogin()
  }

  render() {
    if (this.props.userObject === null) {
      return <Redirect to='/' />
    }
    return (
      <div className="userprofile__body">
        <h3>`Welcome {this.username}`</h3>
        <div>
          <form onSubmit={this.props.handleUpdateSubmit}>
            <p>Name:</p>
            <input onChange={this.props.handleUpdateForm} name="name" type="text" />
            <p>Username:</p>
            <input onChange={this.props.handleUpdateForm} name="username" type="text" />
            <hr />
            <button>Update</button>
          </form>
          <button onClick={() => {
            this.props.deleteUser(this.props.user_id)
          }}>Delete Profile</button>
        </div>
      </div>
    )
  }
}
console.log(this)

export default withRouter(UserProfile)