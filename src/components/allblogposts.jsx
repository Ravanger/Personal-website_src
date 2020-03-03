import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

const AllBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)

  return (
    <>
      {data.allMdx.edges.map(({ node: post }) => (
        <div key={post.id}>
          <Link to={post.frontmatter.path}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <h3>{post.frontmatter.date}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </>
  )
}

export default AllBlogPosts
