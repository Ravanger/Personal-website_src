import React from "react"

import Layout from "../layout"
import SEO from "../seo"
import TagsMenu from "../tagsmenu"
import AllBlogPosts from "../allblogposts"

const IndexPage = ({ pageContext }) => (
  <Layout>
    <SEO title="Home" description="Home is where the house is" />
    <TagsMenu />
    <p style={{textAlign: "center"}}>{"Website is being redesigned... stay tuned!"}</p>
    <AllBlogPosts pageContext={pageContext} />
  </Layout>
)

export default IndexPage
