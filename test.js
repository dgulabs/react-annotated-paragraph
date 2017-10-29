import test from 'ava';
import isEqual from 'lodash/isEqual'
import assign from 'lodash/assign'

import { annotateText } from './src/annotator'


const getClassNames = str => {
  return str.match(/class="([^"]*)"/)[1].split(" ");
}

const getAriaLabel = str => {
  return str.match(/aria-label="([^"]*)"/)[1];
}


test('Test classNames and tooltip (escaped)', t => {
  const viewMode = {
    config: {},
    check: result => isEqual(getClassNames(result).sort(), ["hint--bottom", "hint--medium", "hint--info", "hint--rounded", "annotation"].sort())
  };

  const onlyCorrection = {
    config: { text: "The tooltip here" },
    check: result => getAriaLabel(result) == "The%20tooltip%20here",
  };

  const simpleTooltipRenderer = (text, annotation) => {
    let explanation = escape(annotation.text)
    let highlighted = escape(text.substr(annotation.offset, annotation.length));
    return {
      explanation,
      highlighted
    }
  }

  const text = {
    text: "Hello World",
    tooltipRenderer: simpleTooltipRenderer,
    annotations: [
      assign({ offset: 6, length: 5, type: "info" }, viewMode.config, onlyCorrection.config)
    ]
  };

  const result = annotateText(text); 
  t.true(viewMode.check(result));
  t.true(onlyCorrection.check(result));
});

