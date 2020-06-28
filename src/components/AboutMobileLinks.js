import React from "react"
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"

import "./layout.css"

const AboutMobileLinks = ({ contacts }) => {
  return (
    <div className="about-mobile-links py-3">
      <a
        className="text-primary"
        className="pr-3"
        href={contacts.linkedin}
        target="_blank"
      >
        <span title="Linked In">
          <FaLinkedin size={32} />
        </span>
      </a>
      <a className="text-secondary" href={contacts.github} target="_blank">
        <span title="GitHub">
          <FaGithubSquare size={32} />
        </span>
      </a>
    </div>
  )
}

export default AboutMobileLinks
