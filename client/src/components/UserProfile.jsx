import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import CreateSession from './CreateSession'
import UpdateUserForm from './UpdateUserForm';
import SoundPad from './SoundPad'
import Sounds from '../Assets/Sounds'

import { Link, Redirect } from 'react-router-dom'

class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      sounds: Object.keys(Sounds)
    }
    this.playSound = this.playSound.bind(this)
  }

  playSound(eventObj) {
    //code to be run when click event is fired goes below this line!
    const currentSound = eventObj.currentTarget.id
    Sounds[currentSound].currentTime = 0
    Sounds[currentSound].play()
    }

    render() {
    if (this.props.userObject === null) {
      return <Redirect to='/' />
    }
    let renderUser = this.props.currentUser || {}
      console.table(this.props.currentUser)

      const soundPad = []
      for (let i = 0; i < this.state.sounds.length; i++) {
        soundPad.push(<SoundPad sound={this.state.sounds[i]}
          playSound={this.playSound} />)
      }
    return (
      <div>
      <h3 className="welcome">Welcome {renderUser.username}</h3>
      <p>Make some noise!</p>

      <div className='soundpad-container' key={soundPad.id}>
        {soundPad}
      </div>

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