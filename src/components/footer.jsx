import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"

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
    <footer>
      boris rossovsky {new Date().getFullYear()}
      <ul>
        <li>
          <a href={"mailto:" + data.site.siteMetadata.email}>
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
