import {Context} from "@/parsers/Context";
import {isNumeric} from "@/helpers/Element";

/**
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */
export function Grid(context, classes) {
  if ('grid' === context.computedStyles.display) {
    classes.push('grid');
  }

  let gridAreaCss = null;

  context.matchedRules.every(rule => {
    if (null === rule.properties || 'object' !== typeof rule.properties) {
      return true;
    }

    return Object.entries(rule.properties).every(prop => {
      if ('active' === prop[1]['status']) {
        if ('grid-area' === prop[0]) {
          parseArea(classes, prop[1]['value']);
        }

        if ('grid-row' === prop[0]) {
          parseRow(classes, prop[1]['value']);
        }

        if ('grid-column' === prop[0]) {
          parseColumn(classes, prop[1]['value']);
        }

        if ('grid-row-start' === prop[0]) {
          parseValue(classes, 'row', 'start', prop[1]['value']);
        }

        if ('grid-row-end' === prop[0]) {
          parseValue(classes, 'row', 'end', prop[1]['value']);
        }

        if ('grid-column-start' === prop[0]) {
          parseValue(classes, 'col', 'start', prop[1]['value']);
        }

        if ('grid-column-end' === prop[0]) {
          parseValue(classes, 'col', 'end', prop[1]['value']);
        }
      }

      return true;
    });
  });
}

function parseArea(classes, value) {
  value = value.replace(/\s+/g, ' ');

  let tmp = value.split('/').map((item) =>{
    return item.trim();
  });

  parseValue(classes, 'row', 'start', tmp[0]);
  parseValue(classes, 'col', 'start', tmp[1]);
  parseValue(classes, 'row', 'end', tmp[2]);
  parseValue(classes, 'col', 'end', tmp[3]);
}

function parseRow(classes, value) {
  value = value.replace(/\s+/g, ' ');

  let tmp = value.split('/').map((item) =>{
    return item.trim();
  });

  parseValue(classes, 'row', 'start', tmp[0]);
  parseValue(classes, 'row', 'end', tmp[1]);
}

function parseColumn(classes, value) {
  value = value.replace(/\s+/g, ' ');

  let tmp = value.split('/').map((item) =>{
    return item.trim();
  });

  parseValue(classes, 'col', 'start', tmp[0]);
  parseValue(classes, 'col', 'end', tmp[1]);
}

function parseValue(classes, rowColumn, startEnd, value) {
  if ('auto' === value || isNumeric(value)) {
    classes.push(rowColumn + '-' + startEnd + '-' + value);
  }
}