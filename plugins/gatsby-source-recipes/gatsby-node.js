const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`src/templates/NodeRecipeTemplate/index.js`);

    resolve(
      graphql(
        `
          {
            allNodeRecipe(
              filter: {status: {eq:true}}
            ) {
              edges {
                 node {
                  title
                  status
                  nid:drupal_internal__nid
                }
              }
            }
          }
        `
      )
        // @todo: Add starters for other content types.
        .then((result) => {
          if (result.errors) reject(result.errors);
          if (!result.data) reject('No data found. Fix your GraphQL stuff');
          console.log('Creating Recipe Nodes');
          result.data.allNodeRecipe.edges.forEach(({ node }) => {
            createPage({
              path: node.title,
              component: pageTemplate,
              context: {
                slug: node.nid
              }
            })
          });
        })
    )
  })
}