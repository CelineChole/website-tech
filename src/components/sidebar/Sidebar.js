import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Bio from "./Bio"
import "./sidebar.css"

import SocialLinks from "./SocialLinks"
import TechTags from "./TechTags"

const Sidebar = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteBioQuery {
          site {
            siteMetadata {
              title
              tagline
              author
              contacts {
                linkedin
                github
                portfolio
              }
              labels {
                tag
                tech
                name
                size
                color
              }
            }
          }
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="sidebar">
          <div>
            <Bio
              author={data.site.siteMetadata.author}
              tagline={data.site.siteMetadata.tagline}
            />
            <SocialLinks contacts={data.site.siteMetadata.contacts} />
            <div className="page-links-container">
              <Link to="/" activeClassName="nav-link-active">
                <span className="page-links">Home</span>
              </Link>
              <Link to="/about" activeClassName="nav-link-active">
                <span className="page-links">About</span>
              </Link>
              <Link to="/archive" activeClassName="nav-link-active">
                <span className="page-links">Archive</span>
              </Link>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <TechTags
                labels={data.site.siteMetadata.labels}
                posts={data.allMarkdownRemark.edges}
              />
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Sidebar
