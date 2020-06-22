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
            'inline-block': 'inline-block',
            'inline': 'inline',
            'flex': 'flex',
            'inline-flex': 'inline-flex',
            'grid': 'grid',
            'inline-grid': 'inline-grid',
            'table': 'table',
            'table-caption': 'table-caption',
            'table-cell': 'table-cell',
            'table-column': 'table-column',
            'table-column-group': 'table-column-group',
            'table-footer-group': 'table-footer-group',
            'table-header-group': 'table-header-group',
            'table-row-group': 'table-row-group',
            'table-row': 'table-row'
        },
        'box-sizing': {
            'border-box': 'box-border',
            'content-box': 'box-content'
        },
        'float': {
            'right': 'float-right',
            'left': 'float-left',
            'none': 'float-none'
        },
        'clear': {
            'left': 'clear-left',
            'right': 'clear-right',
            'both': 'clear-both',
            'none': 'clear-none'
        },
        'object-fit': {
            'contain': 'object-contain',
            'cover': 'object-cover',
            'fill': 'object-fill',
            'none': 'object-none',
            'scale-down': 'object-scale-down'
        },
        'object-position': {
            'bottom': 'object-bottom',
            'center': 'object-center',
            'left': 'object-left',
            'left bottom': 'object-left-bottom',
            'left top': 'object-left-top',
            'right': 'object-right',
            'right bottom': 'object-right-bottom',
            'right top': 'object-right-top',
            'top': 'object-top'
        },
        'overflow': {
            'auto': 'overflow-auto',
            'hidden': 'overflow-hidden',
            'visible': 'overflow-visible',
            'scroll': 'overflow-scroll'
        },
        'overflow-x': {
            'auto': 'overflow-x-auto',
            'hidden': 'overflow-x-hidden',
            'visible': 'overflow-x-visible',
            'scroll': 'overflow-x-scroll'
        },
        'overflow-y': {
            'auto': 'overflow-y-auto',
            'hidden': 'overflow-y-hidden',
            'visible': 'overflow-y-visible',
            'scroll': 'overflow-y-scroll'
        },
        '-webkit-overflow-scrolling': {
            'touch': 'scrolling-touch',
            'auto': 'scrolling-auto'
        },
        'position': {
            'static': 'static',
            'fixed': 'fixed',
            'absolute': 'absolute',
            'relative': 'relative',
            'sticky': 'sticky'
        },
        'top': {
            '0': 'top-0',
            'auto': 'top-auto'
        },
        'right': {
            '0': 'right-0',
            'auto': 'right-auto'
        },
        'bottom': {
            '0': 'bottom-0',
            'auto': 'bottom-auto'
        },
        'left': {
            '0': 'left-0',
            'auto': 'left-auto'
        },
        'visibility': {
            'visible': 'visible',
            'hidden': 'invisible'
        },
        'z-index': {
            '0': 'z-0',
            '10': 'z-10',
            '20': 'z-20',
            '30': 'z-30',
            '40': 'z-40',
            '50': 'z-50',
            'auto': 'z-auto'
        },
        'flex-direction': {
            'row': 'flex-row',
            'row-reverse': 'flex-row-reverse',
            'column': 'flex-col',
            'column-reverse': 'flex-col-reverse'
        },
        'flex-wrap': {
            'nowrap': 'flex-no-wrap',
            'wrap': 'flex-wrap',
            'wrap-reverse': 'flex-wrap-reverse'
        },
        'align-items': {
            'stretch': 'items-stretch',
            'flex-start': 'items-start',
            'center': 'items-center',
            'flex-end': 'items-end',
            'baseline': 'items-baseline'
        },
        'align-content': {
            'flex-start': 'content-start',
            'center': 'content-center',
            'flex-end': 'content-end',
            'space-between': 'content-between',
            'space-around': 'content-around'
        },
        'align-self': {
            'auto': 'self-auto',
            'flex-start': 'self-start',
            'center': 'self-center',
            'flex-end': 'self-end',
            'stretch': 'self-stretch'
        },
        'justify-content': {
            'flex-start': 'justify-start',
            'center': 'justify-center',
            'flex-end': 'justify-end',
            'space-between': 'justify-between',
            'space-around': 'justify-around'
        },
        'flex': {
            '0 1 auto': 'flex-initial',
            '1 1 0%': 'flex-1',
            '1 1 auto': 'flex-auto',
            'none': 'flex-none'
        },
        'flex-grow': {
            '1': 'flex-grow',
            '0': 'flex-grow-0'
        },
        'flex-shrink': {
            '1': 'flex-shrink',
            '0': 'flex-shrink-0'
        },
        'order': {
            '-9999': 'order-first',
            '9999': 'order-last',
            '0': 'order-none',
            '1': 'order-1',
            '2': 'order-2',
            '3': 'order-3',
            '4': 'order-4',
            '5': 'order-5',
            '6': 'order-6',
            '7': 'order-7',
            '8': 'order-8',
            '9': 'order-9',
            '10': 'order-10',
            '11': 'order-11',
            '12': 'order-12'
        }
    };

    for (let h in properties) {
        if (style[h] && properties[h].hasOwnProperty(style[h])) {
            classes.push(prefix + properties[h][style[h]]);
        }
    }

    newEle.classList.add(...classes);
    newEle.removeAttribute('style');
}