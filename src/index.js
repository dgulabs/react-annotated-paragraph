import React from 'react'
import 'hint.css'

import { annotateText } from './annotator'


export default class Paragraph extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.paragraph.text
    }
  }

  componentDidMount() {
    if (this.props.setContentRef) {
      this.props.setContentRef(this.contents)
    }
    const text = annotateText({
      text: this.props.paragraph.text,
      annotations: this.props.paragraph.annotations,
      tooltipRenderer: this.props.tooltipRenderer
    })
    this.setState({ text }, () => {
      if (this.props.onTextChange) {
        this.props.onTextChange(this.state.text)
      }
    })
  }

  isCentered = () => this.props.format && this.props.format.centered

  render = () => {
    return (
      <div
        ref={ input => { this.contents = input }}
        dangerouslySetInnerHTML={{ __html: this.state.text }} />
    );
  }
}
