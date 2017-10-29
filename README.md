# react-annotated-paragraph
React component that displays annotations on a text.

![react-annotated-paragraph](https://github.com/dgulabs/react-annotated-paragraph/blob/master/react-annotated-paragraph.gif)

## Installation
You can install react-annotated-paragraph from npm:
```shell
npm install --save react-annotated-paragraph
```

## Compilation
To generate the transpiled and minified version of the component, already under dist/, run:
```shell
npm run build:dist
```

## Dependencies
react-annotated-paragraph depends on:
- [react](https://www.npmjs.com/package/react)
- [hint.css](https://www.npmjs.com/package/hint.css) (tooltips library)
- [es6-string-html-template](https://www.npmjs.com/package/es6-string-html-template) (text escaping inside the tooltips)

## Usage
Import the component:
```
import Paragraph from 'react-annotated-paragraph'
```
Render it like this:
```
<Paragraph
  paragraph={{
    text: "Hello World!",
    annotations: [
      { offset: 6, length: 5, tooltip: "Welt" }  // 'offset' and 'length', required.
    ]
  }}
  tooltipRenderer={ mySimpleRenderer } />
```
`tooltipRenderer` specifies a function that returns the text for the tooltip (`explanation`) and the content to highlight (`highlighted`, so you can format it).
```
/*
 * 'text': the whole text, 'Hello World!'
 * 'annotation': { offset: 6, length: 5, tooltip: "Welt" }
 */
const mySimpleRenderer = (text, annotation) => {
  let explanation = annotation.tooltip
  let highlighted = text.substr(annotation.offset, annotation.length);
  return {
    explanation,
    highlighted
  }
}
```

## Test
You can test the annotator running:
```shell
npm test
```

## Demo
Run a simple usage example, served by webpack-dev-server:
```shell
cd demo/
npm install
npm run server
```
