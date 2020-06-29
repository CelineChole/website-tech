import React from "react"
import { Link } from "gatsby"

const MobilePages = () => {
  return (
    <div className="mobile-pages-main">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/archive">Archive</Link>
    </div>
  )
}

export default MobilePages
