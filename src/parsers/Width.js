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
    matchClasses(context, classes, 'width', function (dimensionEntry) {
        return 'w-' + dimensionEntry.className;
    });

    matchClasses(context, classes, 'max-width', function (dimensionEntry) {
        return 'max-w-' + dimensionEntry.className;
    });
}