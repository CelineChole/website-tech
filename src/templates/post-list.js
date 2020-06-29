import React from "react"
import { Link, graphql } from "gatsby"
import PostExcerptList from "../components/PostExcerptList"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const PostList = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const labels = props.data.site.siteMetadata.labels
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

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
        title="Home"
        keywords={[
          `gatsby`,
          `javascript`,
          `react`,
          `web development`,
          `blog`,
          `graphql`,
        ]}
      />
      <div className="index-main">
        <Sidebar />
        <div>
          <PostExcerptList posts={posts} getTechTags={getTechTags} />
          <section className="page-navigation">
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                <span>← Previous Page</span>
              </Link>
            )}
            {!isLast && (
              <Link to={nextPage} rel="next">
                <span style={{ marginRight: "3rem" }}>Next Page →</span>
              </Link>
            )}
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const listQuery = graphql`
  query paginateQuery($skip: Int!, $limit: Int!) {
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
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          html
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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

export default PostList
