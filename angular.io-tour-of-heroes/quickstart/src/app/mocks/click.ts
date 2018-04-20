import { DebugElement } from '@angular/core';
import { ButtonClickEvents } from './models/button-click-events';

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(
    el: DebugElement | HTMLElement,
    eventObj: any = ButtonClickEvents.left
): void {
    if (el instanceof HTMLElement) {
        el.click();
    } else {
        el.triggerEventHandler('click', eventObj);
    }
}
