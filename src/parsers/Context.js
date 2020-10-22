import {CSSUtilities} from "@/helpers/CSSUtilities";

const cloneDeep = require('clone-deep');

export class Context {
  element = null;

  parsedProps = [];

  remPx = null;

  computedStyles = {};

  matchedRules = {};

  matchesRules = {};

  tailwindSettings = {};

  /**
   *
   * @param {HTMLElement} element
   * @param {Object} tailwindSettings
   */
  constructor(element, tailwindSettings, remPx) {
    this.element = element;
    this.computedStyles = getComputedStyle(element);
    this.remPx = remPx;
    this.matchedRules = CSSUtilities.getCSSRules(element, 'screen', null, true);
    this.tailwindSettings = tailwindSettings;
  }

  addParsedProp(prop) {
    this.parsedProps.push(prop);

    return this;
  }

  hasParsedProp(prop) {
    return -1 !== this.parsedProps.indexOf(prop);
  }

  getUnMatchedRules() {
    let unmatched = {};

    for (let k in this.matchedRules) {
      if (this.matchedRules.hasOwnProperty(k)) {
        if (null === this.matchedRules[k].properties || 'object' !== typeof this.matchedRules[k].properties) {
          continue;
        }

        unmatched[k] = {properties: {}};
        for (let h in this.matchedRules[k]) {
          if ('properties' !== h && this.matchedRules[k].hasOwnProperty(h)) {
            unmatched[k][h] = this.matchedRules[k][h];
          }
        }

        for (let j in this.matchedRules[k].properties) {
          if (this.matchedRules[k].properties.hasOwnProperty(j)) {
            if (!this.matchesRule(k, j)) {
              unmatched[k].properties[j] = this.matchedRules[k].properties[j];
            }
          }
        }
      }
    }

    return unmatched;
  }

  matchesRule(ruleKey, propKey) {
    if (!this.matchesRules.hasOwnProperty(ruleKey)) {
      this.matchesRules[ruleKey] = {};
    }

    this.matchesRules[ruleKey][propKey] = true;
  }
}