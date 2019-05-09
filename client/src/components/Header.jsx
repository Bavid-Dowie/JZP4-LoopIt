import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="header" onClick={(e) => {
          this.props.history.push("/")}}>
          LoopIt
        </h1>
      </div>
    )
  }
}

export default withRouter(Header)