import { graphql } from "gatsby"

export const nodeRecipeFragment = graphql`
  fragment nodeRecipeFragment on node__recipe {
    nid: drupal_internal__nid
    title
    duration: field_duration
    servings: field_servings
    directions: field_directions {
      value
    }
    ingredients: field_ingredients {
      value
    }
    r: relationships {
      content: field_body {
        __typename
        ... on paragraph__text {
          ...textFragment
        }
      }
    }
  }
`
