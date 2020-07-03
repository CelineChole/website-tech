import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobilePageLinks from "./MobilePageLinks"
import "./header.css"

const Header = ({ siteTitle }) => {
  return (
    <header className="head-main">
      <h1 className="head-logo">
        <Link
          to="/"
          style={{
            color: `white`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <MobilePageLinks />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
