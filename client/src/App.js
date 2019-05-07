import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: '',
      sessions: [],
      audio_files: ''
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
