import React from "react"
import kebabCase from "lodash/kebabCase"

import PropTypes from "prop-types"
import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"
import styled from "@emotion/styled"

const DivBlogPost = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #5a9c88;
  margin: 1rem;
`

const DivImageWrapper = styled.div`
  max-height: 22.5em;
  overflow: hidden;
`

const DivBlogPostText = styled.div`
  padding: 2rem;
  box-sizing: border-box;
`

const H2BlogPostTitle = styled.h2`
  margin-top: 2rem;
  font-size: 1.75em;
  font-weight: bold;
`

const PBlogPostExcerpt = styled.p`
  line-height: 1.5;
`

const LiTagItem = styled.li`
  font-weight: 700;
  & + li::before {
    margin: 0.2rem;
    content: "-";
  }
`

const ImgWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BlogPost = ({ post }) => {
  return (
    <DivBlogPost className="pure-g">
      <DivImageWrapper className="pure-u-1 pure-u-md-1-2">
        <Link to={post.frontmatter.path}>
          {!!post.frontmatter.heroimage &&
          !!post.frontmatter.heroimage.childImageSharp ? (
            <GatsbyImage
              fluid={post.frontmatter.heroimage.childImageSharp.fluid}
              alt={post.frontmatter.title}
            />
          ) : (
            <ImgWrapper
              src={post.frontmatter.heroimage.publicURL}
              alt={post.frontmatter.title}
            />
          )}
        </Link>
      </DivImageWrapper>
      <DivBlogPostText className="pure-u-1 pure-u-md-1-2">
        <p>
          {post.frontmatter.date} - {post.timeToRead} min read
        </p>
        <ul>
          {post.frontmatter.tags.map((tag, index) => (
            <LiTagItem key={tag + index}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            </LiTagItem>
          ))}
        </ul>
        <Link to={post.frontmatter.path}>
          <H2BlogPostTitle>{post.frontmatter.title}</H2BlogPostTitle>
          <PBlogPostExcerpt>{post.excerpt}</PBlogPostExcerpt>
        </Link>
      </DivBlogPostText>
    </DivBlogPost>
  )
}

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
