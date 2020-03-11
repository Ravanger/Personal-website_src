import React from "react"

import styled from "styled-components"

import SocialsMenu from "./socialsmenu"

const FooterWrapper = styled.footer`
  text-align: center;
  margin-top: 3rem;
`

const PFooterNotice = styled.p`
  margin-bottom: 0.5rem;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <PFooterNotice>boris rossovsky {new Date().getFullYear()}</PFooterNotice>
      <SocialsMenu />
    </FooterWrapper>
  )
}

export default Footer
