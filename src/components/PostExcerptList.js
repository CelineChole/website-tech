import React from "react"
import { Link } from "gatsby"

const PostExcerptList = ({ posts, getTechTags }) => {
  return (
    <>
      {posts.map(post => {
        const tags = post.node.frontmatter.tags
        return (
          <div key={post.node.id} className="container mt-5">
            <Link to={post.node.fields.slug} className="text-dark">
              <h2 className="title">{post.node.frontmatter.title}</h2>
            </Link>
            <small className="d-block text-info">
              <i>Posted on {post.node.frontmatter.date}</i>
            </small>
            <p className="mt-3 d-inline">{post.node.excerpt}</p>
            <br />
            <Link to={post.node.fields.slug} className="text-primary">
              <div className="d-inline-block mt-1"> Read full post</div>
            </Link>
            <div className="d-block mt-3">{getTechTags(tags)}</div>
          </div>
        )
      })}
    </>
  )
}

export default PostExcerptList;
