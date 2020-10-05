import {Context} from "@/parsers/Context";

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
}