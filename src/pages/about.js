import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>About me</h1>
    <p>This is my personal website.</p>
    <Link to="/">&larr;back to home</Link>
  </Layout>
)

export default SecondPage
