import React from "react"

import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const DivBlogPost = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: rgba(90, 156, 136, 0.5);
  margin: 1rem;
`

const H2BlogPostTitle = styled.h2`
  font-size: 28px;
`

const PBlogPostExcerpt = styled.p`
  line-height: 1.5;
`

const BlogPost = ({ post }) => (
  <DivBlogPost>
    <Link to={post.frontmatter.path}>
      <p>
        {post.frontmatter.date} - {post.timeToRead} min read
      </p>
      <ul>
        {post.frontmatter.tags.map((tag, index) => (
          <li key={tag + index}>{tag}</li>
        ))}
      </ul>
      <H2BlogPostTitle>{post.frontmatter.title}</H2BlogPostTitle>
      <PBlogPostExcerpt>{post.excerpt}</PBlogPostExcerpt>
    </Link>
  </DivBlogPost>
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
