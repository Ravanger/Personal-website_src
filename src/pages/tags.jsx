import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"

import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagsMenu from "../components/tagsmenu"

const H1TagHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

const LiTagItem = styled.li`
  margin-bottom: 1rem;
`

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="All tags" />
      <TagsMenu />
      <H1TagHeader>Tags</H1TagHeader>
      <ul>
        {data.allMdx.group.map((tag) => (
          <LiTagItem key={tag.fieldValue} className="pure-u-1">
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </LiTagItem>
        ))}
      </ul>
    </Layout>
  )
}

Tags.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default Tags
