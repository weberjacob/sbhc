import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

// Layout
import Layout from "../../components/layout/layout"

// Fields
import Content from "../../components/fields/Content"

const NodeRecipeFragment = ({ data }) => {
  const { title } = data.nodeRecipe
  const { content } = data.nodeRecipe.r
  return (
    <Layout>
      <Helmet>
        <title>{title} | Mediacurrent</title>
      </Helmet>
      <Content content={content} />
    </Layout>
  )
}

export default NodeRecipeFragment

export const query = graphql`
  query pageTemplate($slug: Int) {
    nodeRecipe(drupal_internal__nid: { eq: $slug }) {
      ...nodeRecipeFragment
    }
  }
`