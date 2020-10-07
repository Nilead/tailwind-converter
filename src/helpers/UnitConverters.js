// Attempts to round the units if possible to fit tailwind otherwise gives back the original value;
// link: https://github.com/stevezease/tailwind-converter/blob/master/src/scripts/parser/unit-convert.js

import { Context } from '@/parsers/Context';

/**
 * 
 * @param {Integer} value 
 * @param {String} unit 
 * @param {Context} context 
 * @param {String} context 
 */
export const convertUnit = (
    value,
    unit,
    context,
    dimension
) => {
    if ('px' === unit) {
        return value;
    }

    if ('rem' === unit) {
        return value * context.remPx;
    }

    if ('em' === unit) {
        return value * parseFloat(getComputedStyle(context.element.parentElement).fontSize);
    }

    if ('%' === unit) {
        if ('width' === dimension) {
            return value * parseFloat(getComputedStyle(context.element.parentElement).width) / 100;
        } else if ('width' === dimension) {
            return value * parseFloat(getComputedStyle(context.element.parentElement).height) / 100;
        }
    }

    if ('vw' === unit) {
        let document = context.element.ownerDocument;
        return vwToPx(value, document.defaultView || document.parentWindow, document);
    }

    if ('vh' === unit) {
        let document = context.element.ownerDocument;
        return vhToPx(value, document.defaultView || document.parentWindow, document);
    }

    // handle vw and vh?

    return null;
};


/**
 * @link https://stackoverflow.com/questions/16010204/get-reference-of-window-object-from-a-dom-element
 * 
 * @param {*} value 
 * @param {*} window 
 * @param {*} document 
 */
function vwToPx(value, window, document) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;

    return (x * value) / 100;
}

function vhToPx(value) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;

    return (y * value) / 100;
}