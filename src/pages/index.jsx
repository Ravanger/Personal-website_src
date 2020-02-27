import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h1`
  letter-spacing: -0.1em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Hi people</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
