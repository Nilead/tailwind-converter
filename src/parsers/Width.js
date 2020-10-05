import { Context } from "@/parsers/Context";
import { matchClasses } from "@/helpers/Dimension";

/**
 * Map the width css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */

export function Width(context, classes) {
    return matchClasses(context, classes, 'width');
}