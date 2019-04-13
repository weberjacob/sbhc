import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'
import Img from "gatsby-image"

import Layout from '../components/layout'

class RecipePage extends React.Component {
  render() {
    const recipe = get(this, 'props.data.allNodeRecipe.edges')
    const findImages = get(this, 'props.data.allNodeRecipe.edges')
    console.log(findImages)
    
    // const imageArray = findImages
    // const images = imageArray.map(image => {
    //   return <img key={image} src={require(`./icons/${image}.png`)} alt="" />
    // })

    return (
      <Layout>
        <div>
          {recipe.map(({ node }) => (
            <div className="recipe">
              <h3>{ node.title }</h3>
              {/* {recipe.map(({ localFile }) => {
                return (
                  <div key={node.key}>
                    <Img
                      fluid={node.relationships.field_hero_image.localFile.childImageSharp.fluid}
                    />
                  </div>
                )
              })} */}
              {/* <div>{ images }</div> */}
              <Img
                fluid={node.relationships.field_hero_image.localFile.childImageSharp.fluid}
              />
              
              <div className="servings"> { node.field_servings } </div>
              <div className="duration"> { node.field_duration } </div>
              <div className="ingredients" dangerouslySetInnerHTML={{ __html: node.field_ingredients.processed }} />
              <div className="directions" dangerouslySetInnerHTML={{ __html: node.field_directions.processed }} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}


export default RecipePage

export const recipeQuery = graphql`
  query allNodeRecipe {
    allNodeRecipe(sort: {fields: [revision_timestamp], order: DESC}) {
      edges {
        node {
          drupal_id
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
          relationships {
            field_hero_image {
              localFile {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
