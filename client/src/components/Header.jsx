import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PlaySession from './PlaySession'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-banner">
        <h1 className="header" onClick={(e) => {
          this.props.history.push("/")
        }}>
          LoopIt
        </h1>
        </div>
        <PlaySession />
      </div>
    )
  }
}

export default withRouter(Header)