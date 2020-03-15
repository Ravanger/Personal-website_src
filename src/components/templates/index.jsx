import React from "react"

import Layout from "../layout"
import SEO from "../seo"
import TagsMenu from "../tagsmenu"
import AllBlogPosts from "../allblogposts"

const IndexPage = ({ pageContext }) => (
  <Layout>
    <SEO title="Home" description="Home is where the house is" />
    <TagsMenu />
    <AllBlogPosts pageContext={pageContext} />
  </Layout>
)

export default IndexPage
