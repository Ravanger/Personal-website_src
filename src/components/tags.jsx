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
  & + li {
    margin-left: 2rem;
  }
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
    <DivTagsWrapper className="tagslist">
      <UlTagsList>
        {data.allMdx.group.map(tag => (
          <LiTagItem key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </LiTagItem>
        ))}
      </UlTagsList>
    </DivTagsWrapper>
  )
}

export default Tags
