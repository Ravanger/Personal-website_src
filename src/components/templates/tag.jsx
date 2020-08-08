import React from "react"

import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../layout"
import SEO from "../seo"
import TagsMenu from "../tagsmenu"

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

const H1TagHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

const LiTagItem = styled.li`
  margin-bottom: 1rem;
`

const LinkAllTags = styled(Link)`
  font-weight: 700;
`

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} project${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={"Projects tagged " + tag} />
      <TagsMenu />
      <H1TagHeader>{tagHeader}</H1TagHeader>
      <ul>
        {edges.map(({ node }) => {
          const { title, path } = node.frontmatter
          return (
            <LiTagItem key={path} className="pure-u-1">
              <Link to={path}>{title}</Link>
            </LiTagItem>
          )
        })}
      </ul>
      <LinkAllTags to="/tags">All tags</LinkAllTags>
    </Layout>
  )
}

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tag
