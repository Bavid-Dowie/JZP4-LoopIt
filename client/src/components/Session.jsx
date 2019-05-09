import React, { Component } from 'react'
import './Session.css'

class Session extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Session will mount');
  }

  componentDidMount = () => {
    console.log('Session mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Session will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Session will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Session did update');
  }

  componentWillUnmount = () => {
    console.log('Session will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="SessionWrapper">
        Test content
      </div>
    );
  }
}

export default Session;
