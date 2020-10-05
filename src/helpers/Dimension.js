import { convertUnit } from '@/helpers/UnitConverters';

export function matchClasses(context, classes, dimension) {
    let rules = [];
    let dimensionEntries = [];

    Object.entries(context.tailwindSettings.theme[dimension]).every(dimensionEntry => {
        let dimensionMatch = dimensionEntry[1].match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);

        if (dimensionMatch) {
            dimensionEntries.push({
                className: dimensionEntry[0],
                classValue: dimensionEntry[1],
                value: dimensionMatch[1],
                numericValue: parseFloat(dimensionMatch[1]),
                unit: dimensionMatch[2]
            });
        }

        return true;
    })
console.log(context.matchedRules);
    // we prioritize 
    // lets attempt for exact match
    let matched = !context.matchedRules.every(rule => {
        if (null !== rule.properties || 'object' !== typeof rule.properties) {
            return true;
        }

        let _matched = !Object.entries(rule.properties).every(prop => {
            if (dimension === prop[0] && 'active' === prop[1]['status']) {
                let __matched = !dimensionEntries.every(dimensionEntry => {
                    if (prop[1]['value'] === dimensionEntry.classValue) {

                        // TODO: need to add prefix
                        classes.push(dimensionEntry.className);
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
            let realValue = parseFloat(match[1]);

            // we want to match, but we want to prioritize percent match first
            // if we cannot find a good percent match, we can attemp to best match in px
            if ('%' === match[2]) {
                dimensionEntries.every(dimensionEntry => {
                    if (dimensionEntry.type === match[2]) {                
                        let distance = Math.abs(realValue - dimensionEntry.numericValue);
    
                        // we want to ensure that the distance is not greater than our defined threshold
                        if (5 >= distance && (null === minDistance || minDistance > distance)) {
                            bestMatch = dimensionEntry.className;
                            minDistance = distance;
                        }
                    }
    
                    return true;
                })
            } else if ('%' === match[2]) {
                // rem is our 2nd best choice
                dimensionEntries.every(dimensionEntry => {
                    if (dimensionEntry.type === match[2]) {                
                        let distance = Math.abs(realValue - dimensionEntry.numericValue);
    
                        // we want to ensure that the distance is not greater than our defined threshold
                        if (0.05 >= (distance / dimensionEntry.numericValue) && (null === minDistance || minDistance > distance)) {
                            bestMatch = dimensionEntry.className;
                            minDistance = distance;
                        }
                    }
    
                    return true;
                })
            } else {
                // lets attempt to get the value in px

            }
            

            if (bestMatch) {
                classes.push(bestMatch);
                return false;
            }
        }

        return true;
    })
console.log(rules, classes);
    // attempt to compare by px?
    if (rules) {

    }

    return classes;
}