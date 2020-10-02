/**
 * Map the general css properties to classes
 *
 * @param {HTMLElement} originalEle
 * @param {HTMLElement} newEle
 * @param {String} prefix
 * @constructor
 */
export function General(originalEle, newEle, prefix) {
    let style = getComputedStyle(originalEle);

    let classes = [];

    let properties = {
        'display': {
            'none': 'hidden',
            'block': 'block',
            'flow-root': 'flow-root',
            'flex': 'flex'
        }
    };
console.log(style.display);
    for (let h in properties) {
        if (style[h] && properties[h].hasOwnProperty(style[h])) {
            classes.push(prefix + properties[h][style[h]]);
        }
    }

    newEle.classList.add(...classes);
    newEle.removeAttribute('style');
}