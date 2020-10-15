import { Context } from "@/parsers/Context";
import { matchClasses } from "@/helpers/Dimension";

/**
 * Map the padding css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */

export function Padding(context, classes) {
    matchClasses(context, classes, 'padding-top', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'pt-' + dimensionEntry.className;
        } else {
            return '-pt' + dimensionEntry.className;
        }
    });

    matchClasses(context, classes, 'padding-bottom', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'pb-' + dimensionEntry.className;
        } else {
            return '-pb' + dimensionEntry.className;
        }
    });

    matchClasses(context, classes, 'padding-left', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'pl-' + dimensionEntry.className;
        } else {
            return '-pl' + dimensionEntry.className;
        }
    });

    matchClasses(context, classes, 'padding-right', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'pr-' + dimensionEntry.className;
        } else {
            return '-pr' + dimensionEntry.className;
        }
    });
}