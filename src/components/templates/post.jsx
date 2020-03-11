import React from "react"

import kebabCase from "lodash/kebabCase"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"

import Layout from "../layout"
import SEO from "../seo"

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
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
      <div className="pure-g">
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
          <div className="pure-u-1-3">
            <Link to={next.frontmatter.path}>
              {next.frontmatter.title + " >"}
            </Link>
          </div>
        )}
      </div>
      <h1>{frontmatterData.title}</h1>
      <h2>{frontmatterData.date}</h2>
      <h3>
        {tags.map((tag, index) => (
          <Link to={`/tags/${kebabCase(tag)}/`} key={index}>
            {tag}
          </Link>
        ))}
      </h3>
      <MDXRenderer>{mdx.body}</MDXRenderer>
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
