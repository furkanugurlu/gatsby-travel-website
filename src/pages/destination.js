import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css"


const Destination = () => (
  <Layout>
    <h1 className="destinations">Destination</h1>
  </Layout>
)

export const Head = () => <Seo title="Destination" />

export default Destination
