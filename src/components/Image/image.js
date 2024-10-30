import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./image.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {extension: {regex: "/(jpg|jpeg|png)/"}, name: {nin: ["background", "background2"]}}
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  return (
    <div className="image-container">
      <h1>View Our Destination</h1>
      <div className="image-grid">
        {data.allFile.edges.map((image, key) => {
          const imageData = getImage(image.node.childImageSharp)
          return (
            <GatsbyImage
              key={key}
              className="image-item"
              image={imageData}
              alt={image.node.base.split(".")[0]}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Image
