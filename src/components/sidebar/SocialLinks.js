import React from "react"
import { FaLinkedin, FaGithubSquare, FaUser } from "react-icons/fa"
import "./sidebar.css"

const SocialLinks = ({ contacts }) => {
  return (
    <div className="side-social-links float-left mt-3 mb-3">
      <a
        className="text-secondary p-2"
        href={contacts.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <span title="Linked In">
          <FaLinkedin size={26} style={{ color: "secondary" }} />
        </span>
      </a>
      <a
        className="text-secondary p-2"
        href={contacts.github}
        target="_blank"
        rel="noreferrer"
      >
        <span title="GitHub">
          <FaGithubSquare size={26} style={{ color: "secondary" }} />
        </span>
      </a>
      <a
        className="text-secondary p-2"
        href={contacts.portfolio}
        target="_blank"
        rel="noreferrer"
      >
        <span title="Portfolio">
          <FaUser size={26} style={{ color: "secondary" }} />
        </span>
      </a>
    </div>
  )
}

export default SocialLinks
