import React from "react"

import styled from "styled-components"

import NavPrevNext from "./navprevnext"

const NavWrapper = styled.nav`
  margin: 0 2rem;
`

const DivNext = styled.div`
  text-align: right;
`

const AllBlogPostsNav = props => {
  return (
    <NavWrapper>
      <div className="pure-u-1-2">
        <NavPrevNext
          test={props.isFirst}
          url={props.previousUrl}
          text="< Prev"
        />
      </div>
      <DivNext className="pure-u-1-2">
        <NavPrevNext test={props.isLast} url={props.nextUrl} text="Next >" />
      </DivNext>
    </NavWrapper>
  )
}

export default AllBlogPostsNav
