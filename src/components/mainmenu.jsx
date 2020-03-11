import React from "react"

import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

import styled from "styled-components"

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

const LinkAnimated = styled(Link)`
  transition: color 0.4s ease 0s;
  @media (max-width: 48em) {
    padding-top: 1rem;
  }
`

const MainMenu = () => (
  <DivMainMenuWrapper className="pure-u-1-2">
    <CheckboxController type="checkbox" id="toggle" hidden />
    <LabelBurgerMenu for="toggle">
      <FaBars />
    </LabelBurgerMenu>
    <NavMainMenu className="pure-g">
      <LinkAnimated
        to="/"
        className="pure-u-1 pure-u-md-1-4"
        activeStyle={{ color: "#5a9c88" }}
      >
        Projects
      </LinkAnimated>
      <LinkAnimated
        to="/visual/"
        className="pure-u-1 pure-u-md-1-4"
        activeStyle={{ color: "#5a9c88" }}
      >
        Visual
      </LinkAnimated>
      <LinkAnimated
        to="/audio/"
        className="pure-u-1 pure-u-md-1-4"
        activeStyle={{ color: "#5a9c88" }}
      >
        Audio
      </LinkAnimated>
      <LinkAnimated
        to="/contact/"
        className="pure-u-1 pure-u-md-1-4"
        activeStyle={{ color: "#5a9c88" }}
      >
        Contact
      </LinkAnimated>
    </NavMainMenu>
  </DivMainMenuWrapper>
)

export default MainMenu
