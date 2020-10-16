import { Context } from "@/parsers/Context";
import { matchClasses } from "@/helpers/Dimension";

/**
 * Map the width css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */

export function LetterSpacing(context, classes) {
    matchClasses(context, classes, 'letter-spacing', function (dimensionEntry) {
        return 'tracking-' + dimensionEntry.className;
    });
}