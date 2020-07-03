/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import "./layout.css"
import "../styles/reset.css"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
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
            }
          }
        }
      `}
      render={(data) => (
        <div className="site-container">
          <Header
            siteTitle={data.site.siteMetadata.title}
            tagline={data.site.siteMetadata.tagline}
            author={data.site.siteMetadata.author}
            contacts={data.site.siteMetadata.contacts}
          />
          <main className="main">{children}</main>
          <footer>
            © {new Date().getFullYear()}{" "}
            <a target="_blank" href="https://celinechole.com/" rel="noreferrer">
              Céline Cholé
            </a>
            {` `}
            Built with
            {` `}
            <a target="_blank" href="https://www.gatsbyjs.org" rel="noreferrer">
              Gatsby
            </a>
          </footer>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
