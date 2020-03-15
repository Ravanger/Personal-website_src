import React from "react"

import { Link } from "gatsby"

import BlogPost from "./blogpost"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const AllBlogPosts = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  const isFirst = index === 1
  const isLast = index === pageCount

  return (
    <div className="allblogposts">
      {group.map(({ node }) => (
        <BlogPost key={node.id} post={node} />
      ))}
      <nav>
        <div className="pure-u-1-2">
          <NavLink test={isFirst} url={previousUrl} text="Prev" />
        </div>
        <div style={{ textAlign: "right" }} className="pure-u-1-2">
          <NavLink test={isLast} url={nextUrl} text="Next" />
        </div>
      </nav>
    </div>
  )
}

export default AllBlogPosts
