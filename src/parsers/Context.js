import {CSSUtilities} from "@/helpers/CSSUtilities";

export class Context {
    element = null;

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
}