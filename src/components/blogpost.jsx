import React from "react"

import PropTypes from "prop-types"
import { Link } from "gatsby"

const BlogPost = ({ post }) => (
  <div className="blogpost">
    <Link to={post.frontmatter.path}>
      <p>
        {post.frontmatter.date} - {post.timeToRead} min read
      </p>
      <ul>
        {post.frontmatter.tags.map((tag, index) => (
          <li key={tag + index}>{tag}</li>
        ))}
      </ul>
      <h2>{post.frontmatter.title}</h2>
      <p>{post.excerpt}</p>
    </Link>
  </div>
)

BlogPost.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
    }),
    timeToRead: PropTypes.number.isRequired,
    excerpt: PropTypes.string.isRequired,
  }),
}

export default BlogPost
