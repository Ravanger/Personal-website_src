import React from "react"

import { FaBars } from "react-icons/fa"
import PropTypes from "prop-types"
import styled from "styled-components"

const DivMainMenuWrapper = styled.div`
  text-align: right;
  @media (min-width: 48em) {
    position: relative;
  }
`

const LabelBurgerMenu = styled.label`
  font-size: 2em;
  @media (min-width: 48em) {
    display: none;
  }
`

const NavMainMenu = styled.nav`
  position: relative;
  width: 100%;
  font-size: 1.25em;
  display: none;
  @media (min-width: 48em) {
    text-align: center;
    position: absolute;
    bottom: 0;
    display: flex;
  }
`

const CheckboxController = styled.input`
  &:checked ~ ${NavMainMenu} {
    @media (max-width: 48em) {
      display: flex;
    }
  }
`

const MainMenu = ({ children }) => (
  <DivMainMenuWrapper className="pure-u-1-2">
    <CheckboxController type="checkbox" id="toggle" hidden />
    <LabelBurgerMenu htmlFor="toggle">
      <FaBars />
    </LabelBurgerMenu>
    <NavMainMenu className="pure-g">{children}</NavMainMenu>
  </DivMainMenuWrapper>
)

MainMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainMenu
