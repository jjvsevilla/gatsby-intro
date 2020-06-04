import React from "react"
import { css } from "@emotion/core"

const Footer = () => (
  <footer
    css={css`
      background: #eee;
      border-top: 1px solid #ddd;
      display: flex;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
    `}
  >
    © {new Date().getFullYear()}, Built with{" "}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
