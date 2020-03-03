import React from "react"

import styled from "styled-components"

import SiteLogo from "./sitelogo"
import MainMenu from "./mainmenu"

const HeaderWrapper = styled.header`
  margin: 3rem 0;
  margin-bottom: 5rem;
`

const Header = () => (
  <HeaderWrapper className="pure-g">
    <SiteLogo />
    <MainMenu />
  </HeaderWrapper>
)

export default Header
