import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import CreateSession from './CreateSession'
// import UpdateUserForm from './UpdateUserForm';
import { Link, Redirect } from 'react-router-dom'
import UpdateUserForm from './UpdateUserForm';

class UserProfile extends Component {

  componentDidMount() {

  }

  render() {
    if (this.props.userObject === null) {
      return <Redirect to='/' />
    }
    let renderUser = this.props.currentUser || {}
    console.table(this.props.currentUser)
    return (
      <div>
      <h3 className="welcome">Welcome {renderUser.username}</h3>

      <button className="userprofile-body">
          <Link onClick={this.props.handleUpdateSubmit}
                to={UpdateUserForm}
                className="update-button">
                Update Profile
          </Link>
      </button>
        </div>
    )
  }
}
console.log(this)

export default withRouter(UserProfile)