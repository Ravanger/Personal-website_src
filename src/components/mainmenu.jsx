import React from "react"

import { Link } from "gatsby"

import styled from "styled-components"

const DivMainMenuWrapper = styled.div`
  position: relative;
`

const NavMainMenu = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 1.25em;
`

const MainMenu = () => (
  <DivMainMenuWrapper className="pure-u-1-2">
    <NavMainMenu className="pure-g">
      <Link to="/" className="pure-u-1-4">
        Projects
      </Link>
      <Link to="/visual" className="pure-u-1-4">
        Visual
      </Link>
      <Link to="/audio" className="pure-u-1-4">
        Audio
      </Link>
      <Link to="/contact" className="pure-u-1-4">
        Contact
      </Link>
    </NavMainMenu>
  </DivMainMenuWrapper>
)

export default MainMenu
