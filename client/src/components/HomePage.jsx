import React from 'react';
import { Redirect, Link } from 'react-router-dom'
// import title from '../images/loopit_description.png'
// import image from '../images/homepage-image.png'
// import laptopIcon from '../images/laptop_icon.png'
// import codeIcon from '../images/code_icon.png'
// import shareIcon from '../images/share_icon.png'
// import typingPhoto from '../images/typing_stock.png'

const Homepage = (props) => {
  if (props.userObject !== null) {
    return <Redirect to={`/users/${props.userObject.username}`} />
  }
  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="homepage__login">
          <form className="homepage__form" onSubmit={async (e) => {
            e.preventDefault()
            await props.handleLoginSubmit()
          }}>
            <div className="homepage__login-field">
              <label className="homepage__login-label" htmlFor="username">Username: </label>
              <input
                className="login-input"
                type="text"
                name="username"
                placeholder="username"
                value={props.username}
                onChange={props.loginChange}
              ></input>
            </div>
            <div className="homepage__login-field">
              <label className="homepage__login-label" htmlFor="password">Password: </label>
              <input className="login-input" type="password" name="password" placeholder="password" value={props.password}
                onChange={props.loginChange}>
              </input>
            </div>
            <button type="submit" className="login-button">Log in</button>
          </form>
        </div>
      </div>
      <div className="homepage__body">
        <div className="homepage__description">
          <div className="homepage__description-text">
            {/* <img src={title} alt="" className="homepage__description-title"/> */}
            <p className="homepage__description-body1">record it</p>
            <br />
            <p className="homepage__description-body2">loop it</p>
            <br />
            <p className="homepage__description-body3">play it</p>
            <Link to="/create-profile">
              <button className="homepage_signup-button" >Sign up</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="homepage__banner">
        {/* <img src={typingPhoto} alt="" className="homepage__banner-photo"/> */}
      </div>
    </div>
  )
}

export default Homepage
