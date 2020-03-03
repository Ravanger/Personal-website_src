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
            timeToRead
            frontmatter {
              title
              path
              date(formatString: "MMM DD, YYYY")
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <div className="allblogposts">
      {data.allMdx.edges.map(({ node: post }) => (
        <div className="blogpost" key={post.id}>
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
      ))}
    </div>
  )
}

export default AllBlogPosts
