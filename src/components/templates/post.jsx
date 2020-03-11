import React from "react"

import kebabCase from "lodash/kebabCase"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../layout"
import SEO from "../seo"
import TagsMenu from "../tagsmenu"

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

const SectionBlog = styled.section`
  padding: 1rem;
  @media (min-width: 48em) {
    padding: 4rem;
    border-width: 1px;
    border-style: solid;
    border-color: #deebe7;
  }
`

const NavBlogPosts = styled.nav`
  margin-bottom: 4rem;
`

const DivNext = styled.div`
  text-align: right;
`

const H2DateAndReadTime = styled.h2`
  font-size: 0.875em;
  font-weight: 100;
  margin-bottom: 0.25rem;
  & > span::before {
    margin: 0.2rem;
    content: "-";
  }
`

const LiTagItem = styled.li`
  margin-bottom: 2rem;
  font-weight: 700;
  & + li::before {
    margin: 0.2rem;
    content: "-";
    font-weight: 100;
  }
`

const H1Title = styled.h1`
  font-size: 1.75em;
  margin-bottom: 1.5rem;
  @media (min-width: 48em) {
    font-size: 2.5em;
  }
`

const H2Description = styled.h2`
  font-size: 1em;
  margin-bottom: 1.5rem;
  @media (min-width: 48em) {
    font-size: 1.5em;
  }
`

const ArticleMain = styled.article`
  font-size: 1em;
  @media (min-width: 48em) {
    font-size: 1.25em;
  }
`

const Post = ({ data: { mdx }, pageContext }) => {
  const frontmatterData = mdx.frontmatter
  const tags = frontmatterData.tags
  const { next, prev } = pageContext

  return (
    <Layout>
      <SEO
        title={frontmatterData.title}
        description={frontmatterData.description}
      />
      <TagsMenu />
      <SectionBlog>
        <NavBlogPosts className="pure-g">
          {prev && (
            <div className="pure-u-1-3">
              <Link to={prev.frontmatter.path}>
                {"< " + prev.frontmatter.title}
              </Link>
            </div>
          )}
          <div className="pure-u-1-3"></div>
          {!prev && <div className="pure-u-1-3"></div>}
          {next && (
            <DivNext className="pure-u-1-3">
              <Link to={next.frontmatter.path}>
                {next.frontmatter.title + " >"}
              </Link>
            </DivNext>
          )}
        </NavBlogPosts>
        <H2DateAndReadTime>
          {frontmatterData.date}
          <span>{mdx.timeToRead} min read</span>
        </H2DateAndReadTime>
        <ul>
          {tags.map((tag, index) => (
            <LiTagItem key={index}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            </LiTagItem>
          ))}
        </ul>
        <H1Title>{frontmatterData.title}</H1Title>
        <H2Description>{frontmatterData.description}</H2Description>
        <ArticleMain>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </ArticleMain>
      </SectionBlog>
    </Layout>
  )
}

Post.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),

  data: PropTypes.shape({
    mdx: PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.node.isRequired,
      timeToRead: PropTypes.number.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
      }),
    }),
  }),
}

export default Post
