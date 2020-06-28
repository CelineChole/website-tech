import React from "react"
import "./sidebar.css"

import celine from "../../images/celine.jpg"

const Bio = ({ author, tagline }) => {
  return (
    <div className="bio-main w-75">
      <img
        src={celine}
        style={{ maxWidth: `100px` }}
        className="profile-img"
        alt=""
      />
      <div className="mt-1 author-bio">{author}</div>
      <small className="text-muted">{tagline}</small>
    </div>
  )
}

export default Bio
