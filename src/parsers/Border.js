import {Context} from "@/parsers/Context";
import {matchClasses} from "@/helpers/Dimension";

/**
 * Map the width css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */

export function Border(context, classes) {
  matchClasses(context, classes, 'border-top-left-radius', function (dimensionEntry) {
    return 'rounded-tl-' + dimensionEntry.className;
  });

  matchClasses(context, classes, 'border-top-right-radius', function (dimensionEntry) {
    return 'rounded-tr-' + dimensionEntry.className;
  });

  matchClasses(context, classes, 'border-bottom-right-radius', function (dimensionEntry) {
    return 'rounded-br-' + dimensionEntry.className;
  });

  matchClasses(context, classes, 'border-bottom-left-radius', function (dimensionEntry) {
    return 'rounded-bl-' + dimensionEntry.className;
  });

  matchClasses(context, classes, 'border-top-width', function (dimensionEntry) {
    return 'border-t-' + dimensionEntry.className;
  });

  matchClasses(context, classes, 'border-right-width', function (dimensionEntry) {
    return 'border-r-' + dimensionEntry.className;
  });

  matchClasses(context, classes, 'border-bottom-width', function (dimensionEntry) {
    return 'border-b-' + dimensionEntry.className;
  });

  matchClasses(context, classes, 'border-left-width', function (dimensionEntry) {
    return 'border-l-' + dimensionEntry.className;
  });
}