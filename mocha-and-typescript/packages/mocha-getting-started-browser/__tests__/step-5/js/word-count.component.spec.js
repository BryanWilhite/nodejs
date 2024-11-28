import { assert } from 'chai';
import component from './word-count.component.js';
class DOMTestingUtility {
    static async getDocumentNode(selector) {
        return new Promise(resolve => {
            function requestComponent() {
                const element = document.querySelector(selector);
                if (element) {
                    resolve(element);
                }
                else {
                    window.requestAnimationFrame(requestComponent);
                }
            }
            requestComponent();
        });
    }
}
describe(component.name, function () {
    it('is rendered', async function () {
        const container = await DOMTestingUtility.getDocumentNode('#web-component-container');
        assert.isDefined(container);
        assert.isNotNull(container);
    });
});
