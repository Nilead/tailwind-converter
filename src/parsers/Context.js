import { CSSUtilities } from "@/helpers/CSSUtilities";

export class Context {
    element = null;

    parsedProps = [];

    computedStyles = {};

    matchedRules = {};

    tailwindSettings = {};

    /**
     *
     * @param {HTMLElement} element
     * @param {Object} tailwindSettings
     */
    constructor(element, tailwindSettings) {
        this.element = element;
        this.computedStyles = getComputedStyle(element);
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
}