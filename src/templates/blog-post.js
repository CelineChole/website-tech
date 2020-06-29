import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog-post.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const BlogPost = (props) => {
  const post = props.data.markdownRemark
  const labels = props.data.site.siteMetadata.labels
  const tags = post.frontmatter.tags

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
      <SEO title={post.frontmatter.title} />
      <div className="post-page-main">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="post-main">
          <SEO title={post.frontmatter.title} />
          <div className="mt-3">
            <h1 className="heading">{post.frontmatter.title}</h1>
            <small>
              <i>Published on </i> {post.frontmatter.date}
            </small>
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="d-block">{getTechTags(tags)}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        title
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`

export default BlogPost
