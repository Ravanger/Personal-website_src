import React from "react"

import styled from "styled-components"

const LiSocialsItem = styled.li`
  font-size: 1.5em;
  & + li {
    margin-left: 1rem;
  }
`

const SocialsMenuLink = ({ url, ariaLabel, children, isMail }) => (
  <LiSocialsItem>
    {isMail ? (
      <a href={url} aria-label={ariaLabel}>
        {" "}
        {children}
      </a>
    ) : (
      <a
        href={url}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )}
  </LiSocialsItem>
)

export default SocialsMenuLink
