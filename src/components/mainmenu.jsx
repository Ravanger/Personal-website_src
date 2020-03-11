import React from "react"

import { FaBars } from "react-icons/fa"
import styled from "styled-components"

import MainMenuLink from "./mainmenu_link"

const DivMainMenuWrapper = styled.div`
  position: relative;
  @media (max-width: 48em) {
    text-align: right;
  }
`

const LabelBurgerMenu = styled.label`
  font-size: 2em;
  @media (min-width: 48em) {
    display: none;
  }
`

const NavMainMenu = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 1.25em;
  @media (max-width: 48em) {
    text-align: right;
    position: relative;
    display: none;
  }
`

const CheckboxController = styled.input`
  &:checked ~ ${NavMainMenu} {
    @media (max-width: 48em) {
      display: flex;
    }
  }
`

const MainMenu = () => (
  <DivMainMenuWrapper className="pure-u-1-2">
    <CheckboxController type="checkbox" id="toggle" hidden />
    <LabelBurgerMenu htmlFor="toggle">
      <FaBars />
    </LabelBurgerMenu>
    <NavMainMenu className="pure-g">
      <MainMenuLink url="/" name="Projects" />
      <MainMenuLink url="/visual/" name="Visual" />
      <MainMenuLink url="/audio/" name="Audio" />
      <MainMenuLink url="/contact/" name="Contact" />
    </NavMainMenu>
  </DivMainMenuWrapper>
)

export default MainMenu
