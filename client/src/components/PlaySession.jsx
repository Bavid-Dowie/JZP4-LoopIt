import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './PlaySession.css'

export default class PlaySession extends Component {
  render() {
    return (
      <div className='react-player'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
          playing
          width='100%'
          height='100%'
          margin-top='10%'
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
