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

const LinkAnimated = styled(Link)`
  transition: color 0.4s ease 0s;
`

const MainMenu = () => (
  <DivMainMenuWrapper className="pure-u-1-2">
    <NavMainMenu className="pure-g">
      <LinkAnimated
        to="/"
        className="pure-u-1-4"
        activeStyle={{ color: "#5a9c88" }}
      >
        Projects
      </LinkAnimated>
      <LinkAnimated
        to="/visual"
        className="pure-u-1-4"
        activeStyle={{ color: "#5a9c88" }}
      >
        Visual
      </LinkAnimated>
      <LinkAnimated
        to="/audio"
        className="pure-u-1-4"
        activeStyle={{ color: "#5a9c88" }}
      >
        Audio
      </LinkAnimated>
      <LinkAnimated
        to="/contact"
        className="pure-u-1-4"
        activeStyle={{ color: "#5a9c88" }}
      >
        Contact
      </LinkAnimated>
    </NavMainMenu>
  </DivMainMenuWrapper>
)

export default MainMenu
