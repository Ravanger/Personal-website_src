import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"

import SocialsMenuLink from "./socialsmenu_link"

const SocialsMenu = () => {
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
    <ul>
      <SocialsMenuLink
        url={"mailto:" + data.site.siteMetadata.email}
        ariaLabel="Email"
        isMail
      >
        <FaEnvelope />
      </SocialsMenuLink>
      <SocialsMenuLink
        url={data.site.siteMetadata.facebook}
        ariaLabel="Facebook"
      >
        <FaFacebook />
      </SocialsMenuLink>
      <SocialsMenuLink
        url={data.site.siteMetadata.instagram}
        ariaLabel="Instagram"
      >
        <FaInstagram />
      </SocialsMenuLink>
      <SocialsMenuLink url={data.site.siteMetadata.github} ariaLabel="Github">
        <FaGithub />
      </SocialsMenuLink>
      <SocialsMenuLink
        url={data.site.siteMetadata.linkedin}
        ariaLabel="LinkedIn"
      >
        <FaLinkedin />
      </SocialsMenuLink>
    </ul>
  )
}

export default SocialsMenu
