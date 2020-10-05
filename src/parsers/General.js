import { Context } from "@/parsers/Context";

/**
 * Map the general css properties to classes
 *
 * @param {Context} context
 * @param {Array} classes
 * @constructor
 */
export function General(context, classes) {    
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
        },
        'grid-template-columns': {
            'repeat(1, minmax(0, 1fr))': 'grid-cols-1',
            'repeat(2, minmax(0, 1fr))': 'grid-cols-2',
            'repeat(3, minmax(0, 1fr))': 'grid-cols-3',
            'repeat(4, minmax(0, 1fr))': 'grid-cols-4',
            'repeat(5, minmax(0, 1fr))': 'grid-cols-5',
            'repeat(6, minmax(0, 1fr))': 'grid-cols-6',
            'repeat(7, minmax(0, 1fr))': 'grid-cols-7',
            'repeat(8, minmax(0, 1fr))': 'grid-cols-8',
            'repeat(9, minmax(0, 1fr))': 'grid-cols-9',
            'repeat(10, minmax(0, 1fr))': 'grid-cols-10',
            'repeat(11, minmax(0, 1fr))': 'grid-cols-11',
            'repeat(12, minmax(0, 1fr))': 'grid-cols-12',
            'none': 'grid-cols-none'
        },
        'grid-column': {
            'auto': 'col-auto',
            'span 1 / span 1': 'col-span-1',
            'span 2 / span 2': 'col-span-2',
            'span 3 / span 3': 'col-span-3',
            'span 4 / span 4': 'col-span-4',
            'span 5 / span 5': 'col-span-5',
            'span 6 / span 6': 'col-span-6',
            'span 7 / span 7': 'col-span-7',
            'span 8 / span 8': 'col-span-8',
            'span 9 / span 9': 'col-span-9',
            'span 10 / span 10': 'col-span-10',
            'span 11 / span 11': 'col-span-11',
            'span 12 / span 12': 'col-span-12'
        },
        'grid-column-start': {
            '1': 'col-start-1',
            '2': 'col-start-2',
            '3': 'col-start-3',
            '4': 'col-start-4',
            '5': 'col-start-5',
            '6': 'col-start-6',
            '7': 'col-start-7',
            '8': 'col-start-8',
            '9': 'col-start-9',
            '10': 'col-start-10',
            '11': 'col-start-11',
            '12': 'col-start-12',
            '13': 'col-start-13',
            'auto': 'col-start-auto'
        },
        'grid-column-end': {
            '1': 'col-end-1',
            '2': 'col-end-2',
            '3': 'col-end-3',
            '4': 'col-end-4',
            '5': 'col-end-5',
            '6': 'col-end-6',
            '7': 'col-end-7',
            '8': 'col-end-8',
            '9': 'col-end-9',
            '10': 'col-end-10',
            '11': 'col-end-11',
            '12': 'col-end-12',
            '13': 'col-end-13',
            'auto': 'col-end-auto'
        },
        'grid-template-rows': {
            'repeat(1, minmax(0, 1fr))': 'grid-rows-1',
            'repeat(2, minmax(0, 1fr))': 'grid-rows-2',
            'repeat(3, minmax(0, 1fr))': 'grid-rows-3',
            'repeat(4, minmax(0, 1fr))': 'grid-rows-4',
            'repeat(5, minmax(0, 1fr))': 'grid-rows-5',
            'repeat(6, minmax(0, 1fr))': 'grid-rows-6',
            'none': 'grid-rows-none'
        },
        'grid-row': {
            'auto': 'row-auto',
            'span 1 / span 1': 'row-span-1',
            'span 2 / span 2': 'row-span-2',
            'span 3 / span 3': 'row-span-3',
            'span 4 / span 4': 'row-span-4',
            'span 5 / span 5': 'row-span-5',
            'span 6 / span 6': 'row-span-6'
        },
        'grid-row-start': {
            '1': 'row-start-1',
            '2': 'row-start-2',
            '3': 'row-start-3',
            '4': 'row-start-4',
            '5': 'row-start-5',
            '6': 'row-start-6',
            '7': 'row-start-7',
            'auto': 'row-start-auto'
        },
        'grid-row-end': {
            '1': 'row-end-1',
            '2': 'row-end-2',
            '3': 'row-end-3',
            '4': 'row-end-4',
            '5': 'row-end-5',
            '6': 'row-end-6',
            '7': 'row-end-7',
            'auto': 'row-end-auto'
        },
        'grid-auto-flow': {
            'row': 'grid-flow-row',
            'column': 'grid-flow-col',
            'row dense': 'grid-flow-row-dense',
            'column dense': 'grid-flow-col-dense'
        }
    };

    context.matchedRules.every(rule => {
        Object.entries(rule.properties).every(prop => {
            if ('active' === prop[1]['status']) {
                if (properties.hasOwnProperty(prop[0])) {
                    if (properties[prop[0]].hasOwnProperty(prop[1]['value'])) {
                        classes.push(properties[prop[0]][prop[1]['value']]);                       
                    }                
                }
            }
        })
    })

    return classes;
}