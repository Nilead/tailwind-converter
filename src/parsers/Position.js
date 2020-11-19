import {Context} from "@/parsers/Context";
import {matchClasses} from "@/helpers/Dimension";

/**
 * Map the top, right, bottom, left css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */

export function Position(context, classes) {
  matchClasses(context, classes, 'top', function (dimensionEntry) {
    if (0 <= dimensionEntry.value) {
      return 'top-' + dimensionEntry.className;
    } else {
      return '-top' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'right', function (dimensionEntry) {
    if (0 <= dimensionEntry.value) {
      return 'right-' + dimensionEntry.className;
    } else {
      return '-right' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'bottom', function (dimensionEntry) {
    if (0 <= dimensionEntry.value) {
      return 'bottom-' + dimensionEntry.className;
    } else {
      return '-bottom' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'left', function (dimensionEntry) {
    if (0 <= dimensionEntry.value) {
      return 'left-' + dimensionEntry.className;
    } else {
      return '-left' + dimensionEntry.className;
    }
  });
}