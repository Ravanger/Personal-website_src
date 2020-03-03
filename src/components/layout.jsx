import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "black")};
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme="" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
