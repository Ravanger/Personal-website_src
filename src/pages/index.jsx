import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import AllBlogPosts from "../components/allblogposts"

const Title = styled.h1`
  letter-spacing: -0.1em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Home is where the house is" />
    <Title>Hi people</Title>
    <Tags />
    <AllBlogPosts />
  </Layout>
)

export default IndexPage
