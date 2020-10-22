import {Context} from "@/parsers/Context";

/**
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */
export function Flex(context, classes) {
  if ('flex' === context.computedStyles.display) {
    classes.push('flex');
  }
}