import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DivGalleryWrapper = styled.div`
  text-align: center;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  margin: 0.3rem 0.5rem;
`

const IndexPage = () => {
  {/*
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
*/}
  return (
    <Layout>
      <SEO title="Visual" description="My Instagram stuff" />
    <p>{"https://www.instagram.com/ravanger666/"}</p>
{/*
      <DivGalleryWrapper>
        {data.allInstaNode.edges.map(({ node: instapic }) => (
          <StyledGatsbyImage
            key={instapic.id}
            alt={instapic.caption}
            fixed={instapic.localFile.childImageSharp.fixed}
          />
        ))}
      </DivGalleryWrapper>
*/}
    </Layout>
  )
}

export default IndexPage
