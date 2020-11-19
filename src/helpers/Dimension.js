import {convertUnit} from '@/helpers/UnitConverters';

const camelCase = require('camelcase');

/**
 *
 * @param {*} context
 * @param {*} classes
 * @param {*} dimension
 * @param {*} callback
 */
export function matchClasses(context, classes, dimension, callback) {
  let tailwindDimension = null;
  if (-1 !== ['margin-top', 'margin-bottom', 'margin-left', 'margin-right'].indexOf(dimension)) {
    tailwindDimension = 'margin';
  } else if (-1 !== ['padding-top', 'padding-bottom', 'padding-left', 'padding-right'].indexOf(dimension)) {
    tailwindDimension = 'padding';
  } else if (-1 !== ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius'].indexOf(dimension)) {
    tailwindDimension = 'borderRadius';
  } else if (-1 !== ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'].indexOf(dimension)) {
    tailwindDimension = 'borderWidth';
  } else if ('--bg-opacity' === dimension) {
    tailwindDimension = 'backgroundOpacity';
  } else {
    tailwindDimension = camelCase(dimension);
  }

  // check if we should parse
  let matched = !context.matchedRules.every(rule => {
    if (null === rule.properties || 'object' !== typeof rule.properties) {
      return true;
    }

    return Object.entries(rule.properties).every(prop => {
      return !((dimension === prop[0] || tailwindDimension === prop[0]) && 'active' === prop[1]['status']);
    });
  });

  if (!matched) return;

  let rules = [];
  let dimensionEntries = [];

  if (-1 !== ['top', 'bottom', 'left', 'right'].indexOf(tailwindDimension)) {
    [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96].forEach(className => {
      let value = className / 4;

      dimensionEntries.push({
        className: '' + className,
        classValue: value + 'rem',
        value: '' + value,
        numericValue: value,
        unit: 'rem'
      });

      if (value) {
        dimensionEntries.push({
          className: '-' + className,
          classValue: '-' + value + 'rem',
          value: '-' + value,
          numericValue: -value,
          unit: 'rem'
        });
      }
    });
  } else {
    Object.entries(context.tailwindSettings.theme[tailwindDimension]).every(dimensionEntry => {
      let dimensionMatch = dimensionEntry[1].match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);

      if (dimensionMatch) {
        let numericValue = parseFloat(dimensionMatch[1]);
        let unit = dimensionMatch[2];

        dimensionEntries.push({
          className: dimensionEntry[0],
          classValue: dimensionEntry[1],
          value: dimensionMatch[1],
          numericValue: numericValue,
          unit: unit
        });
      }

      return true;
    });
  }

  // we prioritize
  // lets attempt for exact match
  matched = !context.matchedRules.every((rule, ruleKey) => {
    if (null === rule.properties || 'object' !== typeof rule.properties) {
      return true;
    }

    let _matched = !Object.entries(rule.properties).every((prop, propKey) => {
      if (dimension === prop[0] && 'active' === prop[1]['status']) {
        let __matched = !dimensionEntries.every(dimensionEntry => {
          if (prop[1]['value'] === dimensionEntry.classValue) {

            context.matchesRule(ruleKey, propKey);
            classes.push(callback(dimensionEntry));
            return false;
          }

          return true;
        });

        if (__matched) return false;

        let match = prop[1].value.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);
        if (match) {
          rules.push({match: match, ruleKey: ruleKey, propKey: propKey});
        }
      }

      return true;
    });

    return !_matched;
  });

  if (matched) return;

  let minDistance = null;
  rules = rules.filter(rule => {
    if (rule.match) {
      let bestMatch = null;
      let realValue = parseFloat(rule.match[1]);

      // we want to match, but we want to prioritize matching same unit first
      // if we cannot find a good percent match, we can attempt to best match in px
      dimensionEntries.every(dimensionEntry => {
        if (dimensionEntry.type === rule.match[2]) {
          let distance = Math.abs(realValue - dimensionEntry.numericValue);

          // we want to ensure that the distance is not greater than our defined threshold
          if (0.05 >= (distance / dimensionEntry.numericValue) && (null === minDistance || minDistance > distance)) {
            bestMatch = dimensionEntry;
            minDistance = distance;
          }
        }

        return true;
      });

      if (bestMatch) {
        context.matchesRule(rule.ruleKey, rule.propKey);
        classes.push(callback(bestMatch));
        matched = true;

        return false;
      }
    }

    return true;
  });

  if (matched) return;

  // nothing else we can do now, lets try to match by pixel
  let computedValue = parseFloat(context.computedStyles[dimension]);
  let bestMatch = null;
  minDistance = null;

  // dimensionEntries.forEach(dimensionEntry => {
  //   let pxValue = convertUnit(dimensionEntry.numericValue, dimensionEntry.unit, context, dimension);
  //
  //   if (null !== pxValue) {
  //     let distance = Math.abs(pxValue - computedValue);
  //     // we want to ensure that the distance is not greater than our defined threshold
  //     // TODO: what if computedValue = 0?
  //
  //     if (0.05 >= (distance / computedValue) && (null === minDistance || minDistance > distance)) {
  //       bestMatch = dimensionEntry;
  //       minDistance = distance;
  //     }
  //   }
  // });

  dimensionEntries.every(dimensionEntry => {
    let pxValue = convertUnit(dimensionEntry.numericValue, dimensionEntry.unit, context, dimension);

    if (null !== pxValue) {
      if (pxValue >= computedValue && computedValue > 0) {
        bestMatch = dimensionEntry;
        return false;
      } else if (pxValue <= computedValue && computedValue < 0) {
        bestMatch = dimensionEntry;
        return false;
      } else if (pxValue === computedValue && computedValue === 0) {
        bestMatch = dimensionEntry;
        return false;
      }
    }

    return true;
  });

  if (bestMatch) {
    // TODO: which ruleKey and propKey to set match to?
    classes.push(callback(bestMatch));
  }

  return classes;
}