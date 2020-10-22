import {Context} from "@/parsers/Context";
import {matchClasses} from "@/helpers/Dimension";

/**
 * Map the width css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */

export function Opacity(context, classes) {
  matchClasses(context, classes, 'opacity', function (dimensionEntry) {
    return 'opacity-' + dimensionEntry.className;
  });

  matchClasses(context, classes, '--placeholder-opacity', function (dimensionEntry) {
    return 'placeholder-opacity-' + dimensionEntry.className;
  });

  matchClasses(context, classes, '--text-opacity', function (dimensionEntry) {
    return 'text-opacity-' + dimensionEntry.className;
  });

  matchClasses(context, classes, '--bg-opacity', function (dimensionEntry) {
    return 'bg-opacity-' + dimensionEntry.className;
  });

  matchClasses(context, classes, '--border-opacity', function (dimensionEntry) {
    return 'border-opacity-' + dimensionEntry.className;
  });

  matchClasses(context, classes, '--divide-opacity', function (dimensionEntry) {
    return 'divide-opacity-' + dimensionEntry.className;
  });
}