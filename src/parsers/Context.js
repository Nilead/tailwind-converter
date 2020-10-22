import {CSSUtilities} from "@/helpers/CSSUtilities";

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

  matchesRule(ruleKey, propKey) {
    if (!this.matchesRules.hasOwnProperty(ruleKey)) {
      this.matchesRules[ruleKey] = {};
    }

    this.matchesRules[ruleKey][propKey] = true;
  }
}