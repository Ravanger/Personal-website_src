import React from "react"

import kebabCase from "lodash/kebabCase"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <div>
        <SEO
          title={mdx.frontmatter.title}
          description={mdx.frontmatter.description}
        />
        <h4>
          {prev && (
            <Link to={prev.frontmatter.path}>
              {"< " + prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.frontmatter.path}>
              {next.frontmatter.title + " >"}
            </Link>
          )}
        </h4>
        <h1>{mdx.frontmatter.title}</h1>
        <h2>{mdx.frontmatter.date}</h2>
        <h3>
          {tags.map(tag => (
            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          ))}
        </h3>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default Post
