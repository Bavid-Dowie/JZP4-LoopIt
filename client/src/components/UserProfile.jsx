import React, { Component } from 'react'
// import CreateSession from './CreateSession'
import { Link, Redirect } from 'react-router-dom'

class UserProfile extends Component {

  componentDidMount = () => {

  }

  render() {
    if (this.props.userObject === null) {
      return <Redirect to='/' />
    }
    return (
      <div className="userprofile__body">
        <h3>`Welcome {this.props.user}`</h3>
        <div>
          <form onSubmit={this.props.handleUpdateSubmit}>
            <p>Name:</p>
            <input onChange={this.props.handleUpdateForm} name="name" type="text" />
            <p>Username:</p>
            <input onChange={this.props.handleUpdateForm} name="username" type="text" />
            <hr />
            <button>Update</button>
          </form>
        </div>
        <button onClick={() => { this.props.deleteUser(this.props.match.params.id) }}>Delete Profile</button>
      </div>
    )
  }
}

export default UserProfile