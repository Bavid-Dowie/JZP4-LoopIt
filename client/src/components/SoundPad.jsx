import React, { Component } from 'react'
import './SoundPad.css'

class SoundPad extends Component {
  render() {
    return (
      <div
        className='soundpad'
        onClick={this.props.playSound}
        id={this.props.sound}
      >

        <p>{this.props.sound}</p>

      </div>
    )
  }
}

export default SoundPad;