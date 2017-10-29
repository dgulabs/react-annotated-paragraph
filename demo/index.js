import React from 'react'
import ReactDOM from 'react-dom'

import Paragraph from 'react-annotated-paragraph'


const mySimpleRenderer = (text, annotation) => {
  let explanation = annotation.tooltip
  let highlighted = text.substr(annotation.offset, annotation.length)
  return {
    explanation,
    highlighted
  }
}

const el = document.getElementById('root')

ReactDOM.render(
  <Paragraph
    tooltipRenderer={ mySimpleRenderer }
    paragraph={{
      text: "Hello World!",
      annotations: [
        { offset: 6, length: 5, tooltip: "Welt" }  // 'offset' and 'length', required.
      ]
    }}
  />,
  el
)
