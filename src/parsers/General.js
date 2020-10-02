import {Context} from "@/parsers/Context";

/**
 * Map the general css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */
export function General(context, classes) {
    for (let h in context.tailwindSettings.theme) {
        if (context.computedStyles[h] && context.tailwindSettings.theme[h].hasOwnProperty(context.computedStyles[h])) {
            classes.push(context.tailwindSettings.theme[h][context.computedStyles[h]]);
        }
    }

    return classes;
}