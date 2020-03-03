import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllBlogPosts from "../components/allblogposts"

const Title = styled.h1`
  letter-spacing: -0.1em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Home is where the house is" />
    <Title>Hi people</Title>
    <AllBlogPosts />
    <Link to="/tags">Tags</Link>
  </Layout>
)

export default IndexPage
