# react-annotated-paragraph
React component that displays annotations on a text.

## Installation
You can install react-annotated-paragraph from npm:
```
npm install --save react-annotated-paragraph
```

## Dependencies
react-annotated-paragraph depends on:
- [es6-string-html-template](https://www.npmjs.com/package/es6-string-html-template), so the text in the tooltips is escaped.
- [hint.css](https://www.npmjs.com/package/hint.css), for the tooltips on the annotated text.

## ES6
It uses ES6 features like arrow functions, so you would need to transpile the code or use a loader in your favourite module bundler. 
In Webpack, configure babel-loader like this:
```
// webpack.config.js
module: {
  ...
  rules: [
    ...
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules\/(?![react\-annotated\-paragraph])/,
      use: ['babel-loader']
    }
  ]
}
```
This configuration would use babel-loader for all our Javascript sources, including react-annotated-paragraph. It would ignore all other modules under node_modules/. 

## Test
You can test the annotator running:
```shell
npm test
```
