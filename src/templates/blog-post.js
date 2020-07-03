import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"
import "../styles/markdown.css"

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
        <Sidebar />

        <div>
          <h1 className="heading">{post.frontmatter.title}</h1>
          <div className="published-date">
            Published on {post.frontmatter.date}
          </div>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div>{getTechTags(tags)}</div>
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
