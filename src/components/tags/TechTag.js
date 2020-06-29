import React from "react"
import { Link } from "gatsby"
import * as FontAwesome from "react-icons/fa"
import * as Devicons from "react-icons/di"
import * as Fiicons from "react-icons/fi"

const TechTag = (props) => {
  const { tag, tech, name, size, color } = props
  const str = name

  const getIcon = (icon) => {
    switch (icon.substring(0, 2)) {
      case "Fi":
        return React.createElement(Fiicons[name])
      case "Fa":
        return React.createElement(FontAwesome[name])
      case "Di":
        return React.createElement(Devicons[name])
      default:
        return null
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
