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
    if ('default' === dimensionEntry.className) {
      return 'rounded-tl';
    } else {
      return 'rounded-tl-' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'border-top-right-radius', function (dimensionEntry) {
    if ('default' === dimensionEntry.className) {
      return 'rounded-tr';
    } else {
      return 'rounded-tr-' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'border-bottom-right-radius', function (dimensionEntry) {
    if ('default' === dimensionEntry.className) {
      return 'rounded-br';
    } else {
      return 'rounded-br-' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'border-bottom-left-radius', function (dimensionEntry) {
    if ('default' === dimensionEntry.className) {
      return 'rounded-bl';
    } else {
      return 'rounded-bl-' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'border-top-width', function (dimensionEntry) {
    if ('default' === dimensionEntry.className) {
      return 'border-t';
    } else {
      return 'border-t-' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'border-right-width', function (dimensionEntry) {
    if ('default' === dimensionEntry.className) {
      return 'border-r';
    } else {
      return 'border-r-' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'border-bottom-width', function (dimensionEntry) {
    if ('default' === dimensionEntry.className) {
      return 'border-b';
    } else {
      return 'border-b-' + dimensionEntry.className;
    }
  });

  matchClasses(context, classes, 'border-left-width', function (dimensionEntry) {
    if ('default' === dimensionEntry.className) {
      return 'border-l';
    } else {
      return 'border-l-' + dimensionEntry.className;
    }
  });
}