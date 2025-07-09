import React from 'react'
import PropTypes from 'prop-types'
// import { BrowserRouter as Router,Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <link className="nav-link" to="/">Home <span className="sr-only">{props.aboutText}</span></link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>
                /ī
                
                </ul>
                
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault" />
                <label class="form-check-label" for="switchCheckDefault">Dark Mode</label>
            </div>
        </div>
      
    </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
