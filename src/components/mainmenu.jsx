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

const ButtonBurger = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  @media (min-width: 48em) {
    display: none;
  }
`

const SpanMenuWrapper = styled.span`
  margin-right: 2rem;
  display: block;
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
  ${SpanMenuWrapper}:hover &,
  ${SpanMenuWrapper}:focus-within & {
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
    <SpanMenuWrapper>
      <ButtonBurger aria-label="Toggle menu">
        <FaBars size="2em" />
      </ButtonBurger>
      <NavMainMenu className="pure-g">
        <LinkAnimated
          to="/"
          className="pure-u-1 pure-u-sm-1-4"
          activeStyle={{ color: "#5a9c88" }}
        >
          Projects
        </LinkAnimated>
        <LinkAnimated
          to="/visual/"
          className="pure-u-1 pure-u-sm-1-4"
          activeStyle={{ color: "#5a9c88" }}
        >
          Visual
        </LinkAnimated>
        <LinkAnimated
          to="/audio/"
          className="pure-u-1 pure-u-sm-1-4"
          activeStyle={{ color: "#5a9c88" }}
        >
          Audio
        </LinkAnimated>
        <LinkAnimated
          to="/contact/"
          className="pure-u-1 pure-u-sm-1-4"
          activeStyle={{ color: "#5a9c88" }}
        >
          Contact
        </LinkAnimated>
      </NavMainMenu>
    </SpanMenuWrapper>
  </DivMainMenuWrapper>
)

export default MainMenu
