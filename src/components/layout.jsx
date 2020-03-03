import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

const GlobalStyles = createGlobalStyle`
  body {
        font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  li {
    display: inline-block;
  }
  ul, p, h1, h2 {
    margin: 0;
    padding: 0;
  }
`
const DivSiteWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem 1.45rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
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
