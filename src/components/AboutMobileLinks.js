import React from "react"
import "./layout.css"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"

const AboutMobileLinks = ({ contacts }) => {
  return (
    <div className="about-mobile-links">
      <a
        style={{ paddingRight: "0.75rem" }}
        href={contacts.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <span title="Linked In">
          <FaLinkedin size={32} />
        </span>
      </a>
      <a href={contacts.github} target="_blank" rel="noreferrer">
        <span title="GitHub">
          <FaGithubSquare size={32} />
        </span>
      </a>
    </div>
  )
}

export default AboutMobileLinks
