import React from "react"

import BlogPost from "./blogpost"
import BlogNav from "./allblogposts_nav"

const AllBlogPosts = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : "/" + (index - 1).toString()
  const nextUrl = "/" + (index + 1).toString()

  const isFirst = index === 1
  const isLast = index === pageCount

  return (
    <div className="allblogposts">
      <BlogNav
        isFirst={isFirst}
        isLast={isLast}
        nextUrl={nextUrl}
        previousUrl={previousUrl}
      />
      {group.map(({ node }) => (
        <BlogPost key={node.id} post={node} />
      ))}
      <BlogNav
        isFirst={isFirst}
        isLast={isLast}
        nextUrl={nextUrl}
        previousUrl={previousUrl}
      />
    </div>
  )
}

export default AllBlogPosts
