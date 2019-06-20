import React from "react"
import PropTypes from "prop-types"
import Parser from "html-react-parser"

const ParagraphText = props => {
  console.log(props)
  return (
    <div className="paragaph text">
      {Parser(props.description.processed)}
    </div>
  )
}

ParagraphText.propTypes = {
  description: PropTypes.shape({
    processed: PropTypes.string,
  }),
}

export default ParagraphText