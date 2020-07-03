import React from "react"
import { Link } from "gatsby"

const PostExcerptList = ({ posts, getTechTags }) => {
  return (
    <>
      {posts.map((post) => {
        const tags = post.node.frontmatter.tags
        return (
          <div key={post.node.id} className="post-container">
            <Link to={post.node.fields.slug} className="heading">
              <h2>{post.node.frontmatter.title}</h2>
            </Link>
            <div>
              <i>Posted on {post.node.frontmatter.date}</i>
            </div>
            <div className="post-excerpt">{post.node.excerpt}</div>
            <div className="read-more-link">
              <Link className="read-more-link" to={post.node.fields.slug}>
                Read full post
              </Link>
            </div>
            <div style={{ marginTop: "0.75rem" }}>{getTechTags(tags)}</div>
          </div>
        )
      })}
    </>
  )
}

export default PostExcerptList
