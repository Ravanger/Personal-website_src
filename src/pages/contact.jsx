import React from "react"

import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const InputStyled = styled.input`
  font-size: 1em;
  border-width: 1px;
  border-color: #5a9c88;
  padding: 1.5em;
`

const TextAreaStyled = styled.textarea`
  border-width: 1px;
  border-color: #5a9c88;
  padding: 1.5em;
  margin: 0;
  resize: vertical;
`

const ButtonStyled = styled.button`
  font-size: 1.25em;
  color: white;
  background-color: #5a9c88;
  transition: background-color 0.2s ease 0s;
  border: 0;
  height: 3.125em;
  padding: 0;
  &:focus,
  &:hover {
    background-color: #417163;
    transition: background-color 0.2s ease 0s;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" description="Send me an email" />
    <form
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      name="contact"
      className="pure-g"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label htmlFor="bot-field">
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <InputStyled
        type="text"
        name="name"
        placeholder="Your name"
        className="pure-u-1"
        required
      />
      <InputStyled
        type="email"
        name="email"
        placeholder="Your email"
        className="pure-u-1"
        required
      />
      <TextAreaStyled
        name="message"
        placeholder="Your message"
        rows="5"
        className="pure-u-1"
        required
      />
      <div className="pure-u-sm-2-3"></div>
      <ButtonStyled type="submit" className="pure-u-1 pure-u-sm-1-3">
        Send
      </ButtonStyled>
    </form>
  </Layout>
)

export default IndexPage
