import React from "react"
import "./sidebar.css"
import celine from "../../images/celine.jpg"

const Bio = ({ author, tagline }) => {
  return (
    <div style={{ width: "75%" }}>
      <img src={celine} className="profile-img" alt="" />
      <div className="author-bio">{author}</div>
      <div className="tagline">{tagline}</div>
    </div>
  )
}

export default Bio
