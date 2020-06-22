/**
 *
 * @param {HTMLElement} originalEle
 * @param {HTMLElement} newEle
 * @constructor
 */
export function Flex(originalEle, newEle) {
    if ('flex' === getComputedStyle(originalEle).display) {
        newEle.classList.add('flex');
    }
}