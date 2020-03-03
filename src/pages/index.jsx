import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import AllBlogPosts from "../components/allblogposts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Home is where the house is" />
    <Tags />
    <AllBlogPosts />
  </Layout>
)

export default IndexPage
