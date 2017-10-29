import { escape } from 'es6-string-html-template'


const link = ({ explanation, highlighted, hintType, className, index }) => {
  className = (className !== undefined) ? className : "annotation"
  hintType = (hintType !== undefined) ? hintType : "info"
  if (explanation !== undefined) {
    className = `${className} hint--bottom hint--medium hint--${ hintType } hint--rounded`
  }
  return `<a href="javascript: void(0)" class="${ className }" aria-label="${ explanation }" idx=${ index }>${ highlighted }</a>`
}


const annotateText = ({ text, annotations, tooltipRenderer }) => {
  let offset = 0
  let result = ""
  const transformation = (annotation, index) => {
    const beforeHtml = escape(text.substr(offset, annotation.offset - offset))
    const linkHtml = link({
      ...tooltipRenderer(text, annotation),
      index
    })
    result += beforeHtml
    result += linkHtml
    offset = annotation.offset + annotation.length  // next!
  }
  annotations.forEach(transformation)
  result += escape(text.slice(offset))
  return result
}

export {
  annotateText
}
