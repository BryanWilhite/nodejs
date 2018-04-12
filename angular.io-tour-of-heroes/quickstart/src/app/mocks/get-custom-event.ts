/**
 * Get custom DOM event the old fashioned way
 *
 * Although officially deprecated, some browsers (phantom)
 * don’t accept the preferred `new Event(eventName)`.
 *
 * For detail, see https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent
 */
export function getCustomEvent(
    eventName: string,
    bubbles = false,
    cancelable = false
) {
    let evt = document.createEvent('CustomEvent'); // MUST be 'CustomEvent'
    evt.initCustomEvent(eventName, bubbles, cancelable, null);
    return evt;
}
