import { graphql } from 'gatsby';

export const textFragment = graphql`
  fragment textFragment on paragraph__text {
    description: field_description { processed }
  }
`