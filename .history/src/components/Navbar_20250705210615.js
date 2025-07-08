import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

        </div>
      
    </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
