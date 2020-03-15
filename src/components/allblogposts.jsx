import React from "react"

import BlogPost from "./blogpost"
import BlogNav from "./allblogposts_nav"

const AllBlogPosts = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext

  return (
    <div className="allblogposts">
      <BlogNav index={index} pageCount={pageCount} />
      {group.map(({ node }) => (
        <BlogPost key={node.id} post={node} />
      ))}
      <BlogNav index={index} pageCount={pageCount} />
    </div>
  )
}

export default AllBlogPosts
