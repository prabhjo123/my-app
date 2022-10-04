import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      {/* <NavLink className="navbar-brand" to="/">{props.title}</NavLink> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className="nav-link"  activeClassName="is-active" aria-current="page" href="#">{props.home}</a> */}
            <NavLink className="nav-link"  activeClassName="is-active" aria-current="page" to="/">{props.home}</NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link"  href='#'>{props.about}</a> */}
            <NavLink className="nav-link"  to='/about'>{props.about}</NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link"  href='#'>Login</a> */}
            <NavLink className="nav-link"  to='/login'>Login</NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">{props.registration}</a> */}
            <NavLink className="nav-link" to="/registration">{props.registration}</NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">{props.registration}</a> */}
            <NavLink className="nav-link" to="/registrationForm">{props.registrationForm}</NavLink>
          </li>
          {/* <li className="nav-item">
          <label htmlFor="exampleColorInput" className="nav-link">Color picker</label>
          </li> */}
          <li className="nav-item  mx-3" >
             <input type="color"  className="form-control form-control-color" id="exampleColorInput" value="#563d7c"  title=
              "Choose your color" >
          </input>
          </li>
        </ul>
        <div className="d-flex">
          <div className=" form-control bg-primary rounder mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '25px',width:'25px',
          cursor:'pointer'}}></div>
          <div className=" form-control bg-danger rounder mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '25px',width:'25px',
          cursor:'pointer'}}></div>
          <div className=" form-control bg-success rounder mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '25px',width:'25px',
          cursor:'pointer'}}></div>
          <div className="form-control bg-warning rounder mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '25px',width:'25px',
          cursor:'pointer'}}></div>
          <div className="form-control bg-light rounder mx-2" onClick={()=>{props.toggleMode('light')}} style={{height: '25px',width:'25px',
          cursor:'pointer'}}></div>
          <div className="form-control bg-dark rounder mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height: '25px',width:'25px',
          cursor:'pointer'}}></div>
        </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
           <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
        </div> */}
      </div>
      <NavLink className='btn btn-outline-primary' to="/AddUser">Add User</NavLink>
    </div>
  </nav>
  )
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'prabh',
  about: 'About'

}