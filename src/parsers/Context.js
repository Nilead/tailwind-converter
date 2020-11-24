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

    this.parseMatchedRules();
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

  parseMatchedRules() {
    this.matchedRules.every((rule, index) => {
      if (null === rule.properties || 'object' !== typeof rule.properties) {
        return true;
      }

      return Object.entries(rule.properties).every(prop => {
        if ('active' === prop[1]['status']) {
          if ('border-radius' === prop[0]) {
            let tmp = prop[1]['value'].split(' ');

            switch (tmp.length) {
              case 1:
                this.matchedRules[index].properties['border-top-left-radius'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-top-right-radius'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-bottom-right-radius'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-bottom-left-radius'] = {value: tmp[0], status: 'active'};
                break;
              case 2:
                this.matchedRules[index].properties['border-top-left-radius'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-top-right-radius'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['border-bottom-right-radius'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-bottom-left-radius'] = {value: tmp[1], status: 'active'};
                break;
              case 3:
                this.matchedRules[index].properties['border-top-left-radius'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-top-right-radius'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['border-bottom-right-radius'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['border-bottom-left-radius'] = {value: tmp[1], status: 'active'};
                break;
              case 4:
                this.matchedRules[index].properties['border-top-left-radius'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-top-right-radius'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['border-bottom-right-radius'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['border-bottom-left-radius'] = {value: tmp[3], status: 'active'};
                break;
              default:
                break;
            }
          } else if ('border-width' === prop[0]) {
            let tmp = prop[1]['value'].split(' ');

            switch (tmp.length) {
              case 1:
                this.matchedRules[index].properties['border-top-width'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-right-width'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-bottom-width'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-left-width'] = {value: tmp[0], status: 'active'};
                break;
              case 2:
                this.matchedRules[index].properties['border-top-width'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-right-width'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['border-bottom-width'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-left-width'] = {value: tmp[1], status: 'active'};
                break;
              case 3:
                this.matchedRules[index].properties['border-top-width'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-right-width'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['border-bottom-width'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['border-left-width'] = {value: tmp[1], status: 'active'};
                break;
              case 4:
                this.matchedRules[index].properties['border-top-width'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['border-right-width'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['border-bottom-width'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['border-left-width'] = {value: tmp[3], status: 'active'};
                break;
              default:
                break;
            }
          } else if ('inset' === prop[0]) {
            let tmp = prop[1]['value'].split(' ');

            switch (tmp.length) {
              case 1:
                this.matchedRules[index].properties['top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['right'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['bottom'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['left'] = {value: tmp[0], status: 'active'};
                break;
              case 2:
                this.matchedRules[index].properties['top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['right'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['bottom'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['left'] = {value: tmp[1], status: 'active'};
                break;
              case 3:
                this.matchedRules[index].properties['top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['right'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['bottom'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['left'] = {value: tmp[1], status: 'active'};
                break;
              case 4:
                this.matchedRules[index].properties['top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['right'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['bottom'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['left'] = {value: tmp[3], status: 'active'};
                break;
              default:
                break;
            }
          } else if ('margin' === prop[0]) {
            let tmp = prop[1]['value'].split(' ');

            switch (tmp.length) {
              case 1:
                this.matchedRules[index].properties['margin-top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['margin-right'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['margin-bottom'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['margin-left'] = {value: tmp[0], status: 'active'};
                break;
              case 2:
                this.matchedRules[index].properties['margin-top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['margin-right'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['margin-bottom'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['margin-left'] = {value: tmp[1], status: 'active'};
                break;
              case 3:
                this.matchedRules[index].properties['margin-top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['margin-right'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['margin-bottom'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['margin-left'] = {value: tmp[1], status: 'active'};
                break;
              case 4:
                this.matchedRules[index].properties['margin-top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['margin-right'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['margin-bottom'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['margin-left'] = {value: tmp[3], status: 'active'};
                break;
              default:
                break;
            }
          } else if ('padding' === prop[0]) {
            let tmp = prop[1]['value'].split(' ');

            switch (tmp.length) {
              case 1:
                this.matchedRules[index].properties['padding-top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['padding-right'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['padding-bottom'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['padding-left'] = {value: tmp[0], status: 'active'};
                break;
              case 2:
                this.matchedRules[index].properties['padding-top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['padding-right'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['padding-bottom'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['padding-left'] = {value: tmp[1], status: 'active'};
                break;
              case 3:
                this.matchedRules[index].properties['padding-top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['padding-right'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['padding-bottom'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['padding-left'] = {value: tmp[1], status: 'active'};
                break;
              case 4:
                this.matchedRules[index].properties['padding-top'] = {value: tmp[0], status: 'active'};
                this.matchedRules[index].properties['padding-right'] = {value: tmp[1], status: 'active'};
                this.matchedRules[index].properties['padding-bottom'] = {value: tmp[2], status: 'active'};
                this.matchedRules[index].properties['padding-left'] = {value: tmp[3], status: 'active'};
                break;
              default:
                break;
            }
          }
        }

        return true;
      });
    });
  }
}