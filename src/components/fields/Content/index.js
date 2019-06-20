import React from "react"
import PropTypes from "prop-types"

// Paragraphs
import ParagraphText from "../../paragraphs/ParagraphText"

const Content = ({ content }) => (
  <>
    {content.map((section, i) => {
      const datakey = `paragraph-${section["__typename"]}--${i}`
      section.datakey = datakey

      switch (section["__typename"]) {
        case "paragraph__text":
          return <ParagraphText {...section} key={datakey} />
        default:
          console.log(section["__typename"])
          return ""
      }
    })}
  </>
)

Content.propTypes = {
  content: PropTypes.array,
}

export default Content