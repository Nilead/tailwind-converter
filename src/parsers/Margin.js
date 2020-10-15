import { Context } from "@/parsers/Context";
import { matchClasses } from "@/helpers/Dimension";

/**
 * Map the margin css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */

export function Margin(context, classes) {
    matchClasses(context, classes, 'margin-top', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'mt-' + dimensionEntry.className;
        } else {
            return '-mt' + dimensionEntry.className;
        }
    });

    matchClasses(context, classes, 'margin-bottom', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'mb-' + dimensionEntry.className;
        } else {
            return '-mb' + dimensionEntry.className;
        }
    });

    matchClasses(context, classes, 'margin-left', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'ml-' + dimensionEntry.className;
        } else {
            return '-ml' + dimensionEntry.className;
        }
    });

    matchClasses(context, classes, 'margin-right', function (dimensionEntry) {
        if (0 <= dimensionEntry.value) {
            return 'mr-' + dimensionEntry.className;
        } else {
            return '-mr' + dimensionEntry.className;
        }
    });
}