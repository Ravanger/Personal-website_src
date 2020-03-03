import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import BlogPost from "./blogpost"

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
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  )
}

export default AllBlogPosts
