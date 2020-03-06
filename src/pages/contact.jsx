import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" description="Send me an email" />
    <form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="bot-field" />
      <input type="text" name="name" placeholder="Your name" />
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
      <div data-netlify-recaptcha="true"></div>
    </form>
  </Layout>
)

export default IndexPage
