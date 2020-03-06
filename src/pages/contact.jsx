import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PHidden = styled.p`
  visibility: hidden;
  display: none;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" description="Send me an email" />
    <form
      name="contact"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <PHidden>
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </PHidden>
      <input type="text" name="name" placeholder="Your name" />
      <div data-netlify-recaptcha="true"></div>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  </Layout>
)

export default IndexPage
