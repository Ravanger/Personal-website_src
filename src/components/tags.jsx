import React from "react"
import kebabCase from "lodash/kebabCase"

import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const UlTagsList = styled.ul`
  text-align: center;
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
    <div className="tagslist">
      <UlTagsList>
        {data.allMdx.group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </UlTagsList>
    </div>
  )
}

export default Tags
