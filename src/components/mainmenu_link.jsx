import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const LinkAnimated = styled(Link)`
  transition: color 0.4s ease 0s;
  @media (max-width: 48em) {
    padding-top: 1rem;
  }
`

const MainMenuLink = ({ url, name }) => (
  <LinkAnimated
    to={url}
    className="pure-u-1 pure-u-md-1-4"
    activeStyle={{ color: "#5a9c88" }}
  >
    {name}
  </LinkAnimated>
)

MainMenuLink.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default MainMenuLink
