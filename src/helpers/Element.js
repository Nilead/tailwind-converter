function isString(arg) {
    return 'string' === typeof arg;
}

function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

export function toPx(num, length) {
    if (isNumeric(num)) {
        return parseFloat(num);
    }

    if (isString(num)) {
        num = num.replace(/\s/g, '');

        if ('%' === num.slice(-1)) {
            num = num.slice(0, num.length - 1);

            return parseFloat(num) * length / 100;
        }
        if ('px' === num.slice(-2)) {
            num = num.slice(0, num.length - 2);

            return parseFloat(num);
        } else if ('rem' === num.slice(-3)) {
            num = num.slice(0, num.length - 3);

            return parseFloat(num) * parseFloat(getComputedStyle(document.documentElement).fontSize);
        } else {
            return num;
        }
    }

    return parseFloat(num);
}

export function getPercentRelativeToParent(element, computedStyle, property) {
    if (!element.parentElement) {
        return false;
    }

    let value = computedStyle.getPropertyValue(property);
    let parentValue = getComputedStyle(element.parentElement).getPropertyValue(property);

    if ('' === value || '' === parentValue) {
        return false;
    }

    let pxValue = toPx(value);
    let pxParentValue = toPx(parentValue);
console.log(pxValue, pxParentValue);
    return Math.round(pxValue / pxParentValue) * 100;
}