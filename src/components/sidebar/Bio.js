import React from "react"
import "./sidebar.css"
import celine from "../../images/celine.jpg"

const Bio = ({ author }) => {
  return (
    <div style={{ width: "75%" }}>
      <img src={celine} className="profile-img" alt="" />
      <div className="tagline">A coding blog by</div>
      <div className="author-bio">{author}</div>
    </div>
  )
}

export default Bio
