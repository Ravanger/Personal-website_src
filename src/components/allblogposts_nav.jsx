import React from "react"

import styled from "styled-components"

import NavPrevNext from "./navprevnext"

const NavWrapper = styled.nav`
  margin: 4rem 2rem;
`

const DivCenter = styled.div`
  text-align: center;
`

const DivNext = styled.div`
  text-align: right;
`

const AllBlogPostsNav = props => {
  const previousUrl =
    props.index - 1 === 1 ? "/" : "/" + (props.index - 1).toString()
  const nextUrl = "/" + (props.index + 1).toString()

  const isFirst = props.index === 1
  const isLast = props.index === props.pageCount

  return (
    <NavWrapper>
      <div className="pure-u-1-3">
        <NavPrevNext test={isFirst} url={previousUrl} text="< Prev" />
      </div>
      <DivCenter className="pure-u-1-3">
        <span>
          Page {props.index} of {props.pageCount}
        </span>
      </DivCenter>
      <DivNext className="pure-u-1-3">
        <NavPrevNext test={isLast} url={nextUrl} text="Next >" />
      </DivNext>
    </NavWrapper>
  )
}

export default AllBlogPostsNav
