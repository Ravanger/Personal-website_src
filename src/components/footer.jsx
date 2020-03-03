import React from "react"

const Footer = () => {
  return (
    <footer>
      boris rossovsky {new Date().getFullYear()}
      <ul>
        <li>
          <a
            href="https://www.facebook.com/ravanger666"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ravanger666/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Ravanger"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/brossovsky/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
