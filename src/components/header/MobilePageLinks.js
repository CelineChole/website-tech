import React from "react"
import { Link } from "gatsby"

const MobilePages = () => {
  return (
    <div className="mobile-pages-main">
      <Link to="/" activeClassName="nav-link-active">
        Home
      </Link>
      <Link to="/about" activeClassName="nav-link-active">
        About
      </Link>
      <Link to="/archive" activeClassName="nav-link-active">
        Archive
      </Link>
    </div>
  )
}

export default MobilePages
