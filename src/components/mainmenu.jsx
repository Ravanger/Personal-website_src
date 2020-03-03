import React from "react"

import { Link } from "gatsby"

const MainMenu = () => (
  <nav>
    <Link to="/">Projects</Link>
    <Link to="/visual">Visual</Link>
    <Link to="/audio">Audio</Link>
    <Link to="/contact">Contact</Link>
  </nav>
)

export default MainMenu
