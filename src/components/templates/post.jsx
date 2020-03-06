import React from "react"

import kebabCase from "lodash/kebabCase"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

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
  const tags = mdx.frontmatter.tags
  const { next, prev } = pageContext

  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
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
      <h1>{mdx.frontmatter.title}</h1>
      <h2>{mdx.frontmatter.date}</h2>
      <h3>
        {tags.map(tag => (
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
        ))}
      </h3>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default Post
