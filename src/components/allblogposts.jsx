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
    <div className="allblogposts">
      {data.allMdx.edges.map(({ node: post }) => (
        <Link to={post.frontmatter.path} key={post.id}>
          <div className="blogpost">
            <h2>{post.frontmatter.title}</h2>
            <h3>{post.frontmatter.date}</h3>
            <p>{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllBlogPosts
