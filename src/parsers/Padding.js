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
    classes = matchClasses(context, classes, 'padding', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'p-' + dimensionEntry.className;
        } else {
            return '-p' + dimensionEntry.className;
        }
    });

    classes = matchClasses(context, classes, 'padding-top', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'pt-' + dimensionEntry.className;
        } else {
            return '-pt' + dimensionEntry.className;
        }
    });

    classes = matchClasses(context, classes, 'padding-bottom', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'pb-' + dimensionEntry.className;
        } else {
            return '-pb' + dimensionEntry.className;
        }
    });

    classes = matchClasses(context, classes, 'padding-left', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'pl-' + dimensionEntry.className;
        } else {
            return '-pl' + dimensionEntry.className;
        }
    });

    classes = matchClasses(context, classes, 'padding-right', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'pr-' + dimensionEntry.className;
        } else {
            return '-pr' + dimensionEntry.className;
        }
    });

    return classes;
}