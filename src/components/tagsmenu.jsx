import React from "react"
import kebabCase from "lodash/kebabCase"

import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const DivTagsWrapper = styled.div`
  margin: 3rem 0;
`

const UlTagsList = styled.ul`
  text-align: center;
`

const LiTagItem = styled.li`
  font-weight: 700;
  margin-bottom: 2rem;
`

const TagsMenu = () => {
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
    <DivTagsWrapper className="tagslist">
      <UlTagsList>
        {data.allMdx.group.map(tag => (
          <LiTagItem
            key={tag.fieldValue}
            className="pure-u-1 pure-u-sm-1-3 pure-u-md-1-4 pure-u-lg-1-6"
          >
            <Link
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              activeStyle={{ color: "#5a9c88" }}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </LiTagItem>
        ))}
      </UlTagsList>
    </DivTagsWrapper>
  )
}

export default TagsMenu
