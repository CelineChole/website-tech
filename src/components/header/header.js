import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobilePageLinks from "./MobilePageLinks"
import "./header.css"
import invader from "../../images/gatsby-icon.png"

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
          <img
            alt="invader"
            src={invader}
            style={{ width: "3rem", display: "inline", marginRight: "1rem" }}
          />
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
