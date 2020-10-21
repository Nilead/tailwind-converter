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
        'box-sizing': {
            'border-box': 'box-border',
            'content-box': 'box-content'
        },
        'display': {
            'block': 'block',
            'inline-block': 'inline-block',
            'inline': 'inline',
            'flex': 'flex',
            'inline-flex': 'inline-flex',
            'table': 'table',
            'table-caption': 'table-caption',
            'table-cell': 'table-cell',
            'table-column': 'table-column',
            'table-column-group': 'table-column-group',
            'table-footer-group': 'table-footer-group',
            'table-header-group': 'table-header-group',
            'table-row-group': 'table-row-group',
            'table-row': 'table-row',
            'flow-root': 'flow-root',
            'grid': 'grid',
            'inline-grid': 'inline-grid',
            'contents': 'contents',
            'none': 'hidden'
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
            'touch': ' scrolling-touch',
            'auto': ' scrolling-auto'
        },
        'overscroll-behavior': {
            'auto': 'overscroll-auto',
            'contain': 'overscroll-contain',
            'none': 'overscroll-none'
        },
        'overscroll-behavior-y': {
            'auto': 'overscroll-y-auto',
            'contain': 'overscroll-y-contain',
            'none': 'overscroll-y-none'
        },
        'overscroll-behavior-x': {
            'auto': 'overscroll-x-auto',
            'contain': 'overscroll-x-contain',
            'none': 'overscroll-x-none'
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
            'wrap': 'flex-wrap',
            'wrap-reverse': 'flex-wrap-reverse',
            'nowrap': 'flex-no-wrap'
        },
        'flex': {
            '1 1 0%': 'flex-1',
            '1 1 auto': 'flex-auto',
            '0 1 auto': 'flex-initial',
            'none': 'flex-none'
        },
        'flex-grow': {
            '0': 'flex-grow-0',
            '1': 'flex-grow'
        },
        'flex-shrink': {
            '0': 'flex-shrink-0',
            '1': 'flex-shrink'
        },
        'order': {
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
            '12': 'order-12',
            '-9999': 'order-first',
            '9999': 'order-last',
            '0': 'order-none'
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
            'span 12 / span 12': 'col-span-12',
            '1 / -1': 'col-span-full'
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
            'span 6 / span 6': 'row-span-6',
            '1 / -1': 'row-span-full'
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
        },
        'grid-auto-columns': {
            'auto': 'auto-cols-auto',
            'min-content': 'auto-cols-min',
            'max-content': 'auto-cols-max',
            'minmax(0, 1fr)': 'auto-cols-fr'
        },
        'grid-auto-rows': {
            'auto': 'auto-rows-auto',
            'min-content': 'auto-rows-min',
            'max-content': 'auto-rows-max',
            'minmax(0, 1fr)': 'auto-rows-fr'
        },
        'justify-content': {
            'flex-start': 'justify-start',
            'flex-end': 'justify-end',
            'center': 'justify-center',
            'space-between': 'justify-between',
            'space-around': 'justify-around',
            'space-evenly': 'justify-evenly'
        },
        'justify-items': {
            'auto': 'justify-items-auto',
            'start': 'justify-items-start',
            'end': 'justify-items-end',
            'center': 'justify-items-center',
            'stretch': 'justify-items-stretch'
        },
        'justify-self': {
            'auto': 'justify-self-auto',
            'start': 'justify-self-start',
            'end': 'justify-self-end',
            'center': 'justify-self-center',
            'stretch': 'justify-self-stretch'
        },
        'align-content': {
            'center': 'content-center',
            'flex-start': 'content-start',
            'flex-end': 'content-end',
            'space-between': 'content-between',
            'space-around': 'content-around',
            'space-evenly': 'content-evenly'
        },
        'align-items': {
            'flex-start': 'items-start',
            'flex-end': 'items-end',
            'center': 'items-center',
            'baseline': 'items-baseline',
            'stretch': 'items-stretch'
        },
        'align-self': {
            'auto': 'self-auto',
            'flex-start': 'self-start',
            'flex-end': 'self-end',
            'center': 'self-center',
            'stretch': 'self-stretch'
        },
        'place-content': {
            'center': 'place-content-center',
            'start': 'place-content-start',
            'end': 'place-content-end',
            'space-between': 'place-content-between',
            'space-around': 'place-content-around',
            'space-evenly': 'place-content-evenly',
            'stretch': 'place-content-stretch'
        },
        'place-items': {
            'auto': 'place-items-auto',
            'start': 'place-items-start',
            'end': 'place-items-end',
            'center': 'place-items-center',
            'stretch': 'place-items-stretch'
        },
        'place-self': {
            'auto': 'place-self-auto',
            'start': 'place-self-start',
            'end': 'place-self-end',
            'center': 'place-self-center',
            'stretch': 'place-self-stretch'
        },
        'min-width': {
            '0': 'min-w-0',
            '100%': 'min-w-full',
        },
        'min-height': {
            '0': 'min-h-0',
            '100%': 'min-h-full',
            '100vh': 'min-h-screen',
        },
        'max-height': {
            '100%': 'max-h-full',
            '100vh': 'max-h-screen',
        },
        'font-style': {
            'italic': 'italic',
            'normal': 'not-italic',
        },
        'font-weight': {
            '100': 'font-hairline',
            '200': 'font-thin',
            '300': 'font-light',
            '400': 'font-normal',
            '500': 'font-medium',
            '600': 'font-semibold',
            '700': 'font-bold',
            '800': 'font-extrabold',
            '900': 'font-black',
        },
        'font-variant-numeric': {
            'normal': 'normal-nums',
            'ordinal': 'ordinal',
            'slashed-zero': 'slashed-zero',
            'lining-nums': 'lining-nums',
            'oldstyle-nums': 'oldstyle-nums',
            'proportional-nums': 'proportional-nums',
            'tabular-nums': 'tabular-nums',
            'diagonal-fractions': 'diagonal-fractions',
            'stacked-fractions': 'stacked-fractions'
        },
        'list-style-type': {
            'none': 'list-none',
            'disc': 'list-disc',
            'decimal': 'list-decimal'
        },
        'list-style-position': {
            'inside': 'list-inside',
            'outside': 'list-outside'
        },
        'text-align': {
            'left': 'text-left',
            'center': 'text-center',
            'right': 'text-right',
            'justify': 'text-justify'
        },
        'text-decoration': {
            'underline': 'underline',
            'line-through': 'line-through',
            'none': 'no-underline'
        },
        'text-transform': {
            'uppercase': 'uppercase',
            'lowercase': 'lowercase',
            'capitalize': 'capitalize',
            'none': 'normal-case'
        },
        'vertical-align': {
            'baseline': 'align-baseline',
            'top': 'align-top',
            'middle': 'align-middle',
            'bottom': 'align-bottom',
            'text-top': 'align-text-top',
            'text-bottom': 'align-text-bottom'
        },
        'white-space': {
            'normal': 'whitespace-normal',
            'nowrap': 'whitespace-no-wrap',
            'pre': 'whitespace-pre',
            'pre-line': 'whitespace-pre-line',
            'pre-wrap': 'whitespace-pre-wrap'
        },
        'background-attachment': {
            'fixed': 'bg-fixed',
            'local': 'bg-local',
            'scroll': 'bg-scroll'
        },
        'background-clip': {
            'border-box': 'bg-clip-border',
            'padding-box': 'bg-clip-padding',
            'content-box': 'bg-clip-content',
            'text': 'bg-clip-text'
        },
        'background-position': {
            'bottom': 'bg-bottom',
            'center': 'bg-center',
            'left': 'bg-left',
            'left bottom': 'bg-left-bottom',
            'left top': 'bg-left-top',
            'right': 'bg-right',
            'right bottom': 'bg-right-bottom',
            'right top': 'bg-right-top',
            'top': 'bg-top'
        },
        'background-repeat': {
            'repeat': 'bg-repeat',
            'no-repeat': 'bg-no-repeat',
            'repeat-x': 'bg-repeat-x',
            'repeat-y': 'bg-repeat-y',
            'round': 'bg-repeat-round',
            'space': 'bg-repeat-space'
        },
        'background-size': {
            'auto': 'bg-auto',
            'cover': 'bg-cover',
            'contain': 'bg-contain'
        },
        'background-image': {
            'none': 'bg-none',
            'linear-gradient(to top, var(--gradient-color-stops))': 'bg-gradient-to-t',
            'linear-gradient(to top right, var(--gradient-color-stops))': 'bg-gradient-to-tr',
            'linear-gradient(to right, var(--gradient-color-stops))': 'bg-gradient-to-r',
            'linear-gradient(to bottom right, var(--gradient-color-stops))': 'bg-gradient-to-br',
            'linear-gradient(to bottom, var(--gradient-color-stops))': 'bg-gradient-to-b',
            'linear-gradient(to bottom left, var(--gradient-color-stops))': 'bg-gradient-to-bl',
            'linear-gradient(to left, var(--gradient-color-stops))': 'bg-gradient-to-l',
            'linear-gradient(to top left, var(--gradient-color-stops))': 'bg-gradient-to-tl'
        },
        'border-style': {
            'solid': 'border-solid',
            'dashed': 'border-dashed',
            'dotted': 'border-dotted',
            'double': 'border-double',
            'none': 'border-none'
        },
        'border-collapse': {
            'collapse': 'border-collapse',
            'separate': 'border-separate'
        },
        'table-layout': {
            'auto': 'table-auto',
            'fixed': 'table-fixed'
        },
        'box-shadow': {
            '0 0 0 1px rgba(0, 0, 0, 0.05)': 'shadow-xs',
            '0 1px 2px 0 rgba(0, 0, 0, 0.05)': 'shadow-sm',
            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)': 'shadow',
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)': 'shadow-md',
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)': 'shadow-lg',
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)': 'shadow-xl',
            '0 25px 50px -12px rgba(0, 0, 0, 0.25)': 'shadow-2xl',
            'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)': 'shadow-inner',
            '0 0 0 3px rgba(66, 153, 225, 0.5)': 'shadow-outline',
            'none': 'shadow-none'
        },
        'appearance': {
            'none': 'appearance-none'
        },
        'cursor': {
            'auto': 'cursor-auto',
            'default': 'cursor-default',
            'pointer': 'cursor-pointer',
            'wait': 'cursor-wait',
            'text': 'cursor-text',
            'move': 'cursor-move',
            'not-allowed': 'cursor-not-allowed'
        },
        'pointer-events': {
            'none': 'pointer-events-none',
            'auto': 'pointer-events-auto'
        },
        'resize': {
            'none': 'resize-none',
            'vertical': 'resize-y',
            'horizontal': 'resize-x',
            'both': 'resize'
        },
        'user-select': {
            'none': 'select-none',
            'text': 'select-text',
            'all': 'select-all',
            'auto': 'select-auto'
        }
    };

    context.matchedRules.every(rule => {
        if (null === rule.properties || 'object' !== typeof rule.properties) {
            return true;
        }

        Object.entries(rule.properties).every(prop => {
            if ('active' === prop[1]['status']) {
                if (properties.hasOwnProperty(prop[0])) {
                    let value = prop[1]['value'].replace(/\s+/g, ' ');

                    if (properties[prop[0]].hasOwnProperty(value)) {
                        classes.push(properties[prop[0]][value]);
                    }
                }
            }

            return true;
        });

        return true;
    });
}