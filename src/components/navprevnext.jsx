import React from "react"

import { Link } from "gatsby"

const NavPrevNext = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return null
  }
}

export default NavPrevNext
