import {Context} from "@/parsers/Context";

/**
 * Map the width css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */

export function Width(context, classes) {
    let rules = [];
    let widthEntries = Object.entries(context.tailwindSettings.theme.width);

    // lets attempt for exact match
    let matched = !context.matchedRules.every(rule => {
        if ('object' !== typeof rule.properties) {
            return false;
        }

        let _matched = !Object.entries(rule.properties).every(prop => {
            if ('width' === prop[0] && 'active' === prop[1]['status']) {
                let __matched = !widthEntries.every(width => {
                    if (prop[1]['value'] === width[1]) {

                        // TODO: need to add prefix
                        classes.push(width[0]);
                        return false;
                    }

                    return true;
                })

                if (__matched) return false;

                rules.push(prop[1]);
            }

            return true;
        })

        return !_matched;
    })

    let minDistance = null;
    rules = rules.filter(rule => {
        let match = rule.value.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);

        if (match) {
            let bestMatch = null;

            widthEntries.every(width => {
                let widthMatch = width[1].match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);

                if (widthMatch && widthMatch[2] === match[2]) {
                    let distance = Math.abs(parseFloat(match[1]) - parseFloat(widthMatch[1]));

                    if (null === minDistance || minDistance > distance) {
                        bestMatch = width[0];
                        minDistance = distance;
                    }
                }

                return true;
            })

            if (bestMatch) {
                classes.push(bestMatch);
                return false;
            }
        }

        return true;
    })

    // attempt to compare by px?
    if (rules) {

    }

    return classes;
}