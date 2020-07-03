import React from "react"
import { FaLinkedin, FaGithubSquare, FaUser } from "react-icons/fa"
import "./sidebar.css"

const SocialLinks = ({ contacts }) => {
  return (
    <div className="social-links-container">
      <a
        className="social-link"
        href={contacts.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <span title="Linked In">
          <FaLinkedin size={26} />
        </span>
      </a>
      <a
        className="social-link"
        href={contacts.github}
        target="_blank"
        rel="noreferrer"
      >
        <span title="GitHub">
          <FaGithubSquare size={26} />
        </span>
      </a>
      <a
        className="social-link"
        href={contacts.portfolio}
        target="_blank"
        rel="noreferrer"
      >
        <span title="Portfolio">
          <FaUser size={26} />
        </span>
      </a>
    </div>
  )
}

export default SocialLinks
