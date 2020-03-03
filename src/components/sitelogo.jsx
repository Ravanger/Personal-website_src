import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

const SiteLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <div>
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.subtitle}</h2>
      </Link>
    </div>
  )
}

export default SiteLogo
