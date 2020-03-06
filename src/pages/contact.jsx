import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" description="Send me an email" />
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="text" name="name" placeholder="Your name" />
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default IndexPage
