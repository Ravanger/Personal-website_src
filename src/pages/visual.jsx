import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            caption
            id
            localFile {
              childImageSharp {
                fixed(width: 300, height: 300, quality: 70) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Visual" description="My Instagram stuff" />
      <div>
        {data.allInstaNode.edges.map(({ node: instapic }) => (
          <GatsbyImage
            key={instapic.id}
            alt={instapic.caption}
            fixed={instapic.localFile.childImageSharp.fixed}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
