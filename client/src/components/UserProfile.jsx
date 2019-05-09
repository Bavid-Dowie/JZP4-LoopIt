import React, { Component } from 'react'

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('UserProfile will mount');
  }

  componentDidMount = () => {
    console.log('UserProfile mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('UserProfile will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('UserProfile will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('UserProfile did update');
  }

  componentWillUnmount = () => {
    console.log('UserProfile will unmount');
  }
  render() {
    return (
      <div>
        <h1>There should be some stuff here</h1>
      </div>
    )
  }
}

export default UserProfile