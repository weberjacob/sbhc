import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from '../components/layout'

const RecipePage = ({ data }) => (
  <Layout>
    <div>
      {data.allNodeRecipe.edges.map(({ node }) => (
        <div>
          <h3>{node.title}</h3>
          {/* <Img fixed={node.field_image.fixed } /> */}
          <div className="servings"> {node.field_servings} </div>
          <div className="duration"> {node.field_duration} </div>
          <div className="ingredients" dangerouslySetInnerHTML={{ __html: node.field_ingredients.processed }} />
          <div className="directions" dangerouslySetInnerHTML={{ __html: node.field_directions.processed }} />
        </div>
      ))}
    </div>
  </Layout>
)

export default RecipePage

export const recipeQuery = graphql`
  query allNodeRecipe {
    allNodeRecipe(sort: {fields: [revision_timestamp], order: DESC}) {
      edges {
        node {
          id
          revision_timestamp
          title
          field_servings
          field_duration
          field_ingredients {
            value
            format
            processed
          }
          field_directions {
            value
            format
            processed
          }
        }
      }
    }
  }
`
