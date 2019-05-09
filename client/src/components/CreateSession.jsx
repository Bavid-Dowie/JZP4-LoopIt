import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateSession(props) {
  return (
    <div className="create-form" >
      <h2>Create a new session</h2>
      <form onSubmit={props.newSession}>
          <p>Session's Title:</p>
        <input
          type="file"
          name="title"
          value={props.sessionForm.name}
          onChange={props.handleSessionChange} />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateSession);
