import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { withRouter } from 'react-router'

// import './PlaySession.css'

class PlaySession extends Component {
  render() {
    return (
      <div className='react-player'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          onPause
          width='50%'
          height='100%'
          padding-top='20%'
          fileConfig={{
            attributes: {
              style: {
                display: 'block',
                width: 'auto',
                height: 'auto'
              }
            }
          }}
        />
      </div>
    )
  }
}

export default withRouter(PlaySession)