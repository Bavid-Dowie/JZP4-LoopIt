import React, { Component } from 'react'
import { withRouter } from 'react-router'
import "./UpdateUserForm.css"

class UpdateUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render(props) {
    return (
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
          this.props.deleteUser(this.state.user.id) }}>Delete Profile</button>
      </div>
    )
  }
}

export default withRouter(UpdateUserForm)