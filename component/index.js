import React from 'react'
import 'hint.css'

import { annotateText } from './annotator'


export default class Paragraph extends React.Component {

  constructor(props) {
    super(props)

    if (this.props.deleteParagraph) {
      this.state = {
        deleteBtnWarning: false,
        text: this.props.paragraph.text
      }
    } else {
      this.state = { text: this.props.paragraph.text }
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
    const {
      deleteParagraph
    } = this.props;
    
    return (
        <article className="media">
          <div className="media-content">
            <div className={ this.isCentered() ? "content has-text-centered" : "content" }>
              <div
                ref={ input => { this.contents = input }}
                dangerouslySetInnerHTML={{ __html: this.state.text }} />
            </div>
          </div>
          { deleteParagraph && (
            <div>
            { !this.state.deleteBtnWarning ? (
              <div className="media-right">
                <button
                  className="delete delete-paragraph"
                  onClick={ () => this.setState({ deleteBtnWarning: true }) } />
              </div>
            ) : (
              <div className="field is-grouped">
                <div className="control">
                  <button
                    className="button is-link delete-paragraph-confirm"
                    onClick={ () => deleteParagraph() }>Yes</button>
                </div>
                <div className="control">
                  <button
                    className="button is-link delete-paragraph-cancel"
                    onClick={ () => this.setState({ deleteBtnWarning: false }) }>No</button>
                </div>
              </div>
            )}
            </div>
          )}
        </article>
    );
  }
}
