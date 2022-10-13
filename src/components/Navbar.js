import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
 <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>{props.title}</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <div className="nav-item mx-2" >
        <a className="nav-Link active" aria-current="page" href="#">Home</a>

          {/* <Link className="nav-Link active" aria-current="page" to="/">Home</Link> */}
        </div>
        {/* <div className="nav-item">
          <Link className="nav-Link" to="/AboutUs">{props.about}</Link>
        </div> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch mx-4 text-${(props.mode==="Linkght")?'dark':'Linkght'}`}>
              
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.prototype = {title : PropTypes.string.isRequired
                    ,about :PropTypes.string.isRequired}