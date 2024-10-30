import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../components/Image/image"

const Images = () => (
  <Layout>
    <Image />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Images
