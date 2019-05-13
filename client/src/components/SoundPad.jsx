import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"
import { withRouter } from 'react-router'
import Sounds from '../Assets/Sounds'
import './SoundPad.css'

class SoundPad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sounds: Object.keys(Sounds)
    }
  }

  render() {
    console.log(this.state.sounds)
    return <AwesomeButton
        type='secondary'
        className='soundpad'
        element='node'
        ripple
        onClick={this.state.playSound}
        id={this.state.sounds}
      >
        {this.state.sounds}
    </AwesomeButton>

  }
}

export default withRouter(SoundPad)
