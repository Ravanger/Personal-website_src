import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagsMenu from "../components/tagsmenu"
import AllBlogPosts from "../components/allblogposts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Home is where the house is" />
    <TagsMenu />
    <AllBlogPosts />
  </Layout>
)

export default IndexPage
