import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  text-align: center;
`

const PFooterNotice = styled.p`
  margin-bottom: 0.5rem;
`

const LiSocialsItem = styled.li`
  & + li {
    margin-left: 1rem;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          facebook
          instagram
          github
          linkedin
        }
      }
    }
  `)

  return (
    <FooterWrapper>
      <PFooterNotice>boris rossovsky {new Date().getFullYear()}</PFooterNotice>
      <ul>
        <LiSocialsItem>
          <a href={"mailto:" + data.site.siteMetadata.email}>
            <FaEnvelope />
          </a>
        </LiSocialsItem>
        <LiSocialsItem>
          <a
            href={data.site.siteMetadata.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </LiSocialsItem>
        <LiSocialsItem>
          <a
            href={data.site.siteMetadata.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </LiSocialsItem>
        <LiSocialsItem>
          <a
            href={data.site.siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </LiSocialsItem>
        <LiSocialsItem>
          <a
            href={data.site.siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </LiSocialsItem>
      </ul>
    </FooterWrapper>
  )
}

export default Footer
