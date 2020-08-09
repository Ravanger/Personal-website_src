import React from "react"

import styled from "@emotion/styled"

import NavPrevNext from "./navprevnext"

const NavBlogPosts = styled.nav`
  font-size: 0.875em;
  font-weight: bold;
  @media (min-width: 48em) {
    font-size: 1em;
  }
`

const DivNext = styled.div`
  text-align: right;
`

const BlogPostNav = (props) => {
  const prev = props.prev
  const next = props.next
  return (
    <NavBlogPosts className="pure-g">
      <div className="pure-u-1-2">
        <NavPrevNext
          test={!prev}
          url={!!prev ? prev.frontmatter.path : ""}
          text={!!prev ? "< " + prev.frontmatter.title : ""}
        />
      </div>
      <DivNext className="pure-u-1-2">
        <NavPrevNext
          test={!next}
          url={!!next ? next.frontmatter.path : ""}
          text={!!next ? next.frontmatter.title + " >" : ""}
        />
      </DivNext>
    </NavBlogPosts>
  )
}

export default BlogPostNav
