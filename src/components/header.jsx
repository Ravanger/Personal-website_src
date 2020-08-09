import React from "react"

import styled from "@emotion/styled"

import SiteLogo from "./sitelogo"
import MainMenu from "./mainmenu"
import MainMenuLink from "./mainmenu_link"

const HeaderWrapper = styled.header`
  margin: 3rem 0;
  margin-bottom: 5rem;
`

const Header = () => (
  <HeaderWrapper className="pure-g">
    <SiteLogo />
    <MainMenu>
      <MainMenuLink url="/" name="Home" />
      <MainMenuLink url="/visual/" name="Visual" />
      <MainMenuLink url="/audio/" name="Audio" />
      <MainMenuLink url="/contact/" name="Contact" />
    </MainMenu>
  </HeaderWrapper>
)

export default Header
