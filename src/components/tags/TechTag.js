import React from "react"
import { Link } from "gatsby"
// import * as FontAwesome from "react-icons/fa"
import {
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiGitMerge,
  DiCss3Full,
  DiFirebase,
  DiVisualstudio,
  DiGithubBadge,
  DiTerminal,
} from "react-icons/di"
import { FiLink, FiHeadphones } from "react-icons/fi"

const TechTag = (props) => {
  const { tag, tech, name, size, color } = props
  const str = name

  const getIcon = (icon) => {
    switch (icon) {
      case "DiJsBadge":
        return React.createElement(DiJsBadge)
      case "DiReact":
        return React.createElement(DiReact)
      case "DiNodejsSmall":
        return React.createElement(DiNodejsSmall)
      case "DiGitMerge":
        return React.createElement(DiGitMerge)
      case "DiCss3Full":
        return React.createElement(DiCss3Full)
      case "DiFirebase":
        return React.createElement(DiFirebase)
      case "DiVisualstudio":
        return React.createElement(DiVisualstudio)
      case "DiGithubBadge":
        return React.createElement(DiGithubBadge)
      case "DiTerminal":
        return React.createElement(DiTerminal)
      case "FiLink":
        return React.createElement(FiLink)
      case "FiHeadphones":
        return React.createElement(FiHeadphones)
      default:
        return React.createElement(DiJsBadge)
    }
  }
  const icon = getIcon(str)

  return (
    <div className="tag-container">
      <Link to={`/tags/${tag}/`}>
        <button className="tag-button">
          <p style={{ display: "inline" }}>{tech} </p>
          <div style={{ display: "inline", fontSize: size, color: color }}>
            {icon}
          </div>
        </button>
      </Link>
    </div>
  )
}

export default TechTag
