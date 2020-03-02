import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h1`
  letter-spacing: -0.1em;
`
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO title="Home" description="Home is where the house is" />
      <Title>Hi people</Title>
      {posts.map(({ node: post }) => (
        <div key={post.id}>
          <Link to={post.frontmatter.path}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <h3>{post.frontmatter.date}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
      <Link to="tags">Tags</Link>
    </Layout>
  )
}

export default IndexPage
