import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

const GlobalStyles = createGlobalStyle`
  li {
    display: inline-block;
  }
  ul, p, h1, h2 {
    margin: 0;
    padding: 0;
  }
`
const SiteWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <SiteWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </SiteWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
