import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import PostExcerptList from "../components/PostExcerptList"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const Tag = ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges
  const labels = data.site.siteMetadata.labels
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  const getTechTags = (tags) => {
    const techTags = []
    tags.forEach((tag, i) => {
      labels.forEach((label) => {
        if (tag === label.tag) {
          techTags.push(
            <TechTag
              key={i}
              tag={label.tag}
              tech={label.tech}
              name={label.name}
              size={label.size}
              color={label.color}
            />
          )
        }
      })
    })
    return techTags
  }

  return (
    <Layout>
      <SEO
        title="web dev bit by bit"
        keywords={[
          `gatsby`,
          `javascript`,
          `react`,
          `web development`,
          `node.js`,
          `graphql`,
        ]}
      />
      <div className="index-main">
        <Sidebar />

        <div>
          <h2 className="filter-heading">{tagHeader}</h2>
          <PostExcerptList posts={posts} getTechTags={getTechTags} />
        </div>
      </div>
    </Layout>
  )
}

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
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
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          html
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Tag
