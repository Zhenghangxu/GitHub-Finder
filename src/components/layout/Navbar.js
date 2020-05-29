import React from 'react'
import PropTypes from 'prop-types'


const Navbar =({icon,title})=>{
  // set the props here
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={"fa-fw "+icon}></i>{title}
        </h1>
      </nav>
    )
}
Navbar.defaultProps = {
  title:"Github Finder",
  icon:"fab fa-github"
}

Navbar.propTypes = {
  title:PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired,
}
export default Navbar
