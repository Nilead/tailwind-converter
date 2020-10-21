import { CSSUtilities } from "@/helpers/CSSUtilities";

export class Context {
    element = null;

    parsedProps = [];

    remPx = null;

    computedStyles = {};

    matchedRules = {};

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
        this.matchedRules = CSSUtilities.getCSSRules(element, 'screen', null, true); console.log(this.matchedRules);
        this.tailwindSettings = tailwindSettings;
    }

    addParsedProp(prop) {
        this.parsedProps.push(prop);

        return this;
    }

    hasParsedProp(prop) {
        return -1 !== this.parsedProps.indexOf(prop);
    }
}