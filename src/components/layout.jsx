import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"

const GlobalStyles = css`
  body {
    overflow-x: hidden;
  }
  body,
  a,
  p,
  input,
  textarea,
  button {
    font-family: "Roboto", sans-serif !important;
  }
  a {
    text-decoration: none;
    color: #000000;
    &:focus,
    &:hover {
      color: #5a9c88;
    }
  }
  li {
    display: inline-block;
  }
  ul,
  p,
  h1,
  h2 {
    margin: 0;
    padding: 0;
  }
`

const DivSiteWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem 1.45rem;
  @media (max-width: 35.5em) {
    padding: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <DivSiteWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </DivSiteWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
