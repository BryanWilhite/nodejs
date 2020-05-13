import component from './word-count.component.js';

class DOMTestingUtility {
    static async getDocumentNode(selector: string): Promise<Node> {
        return new Promise(resolve => {
            function requestComponent() {
                const element = document.querySelector(selector);
                if (element) {
                    resolve(element);
                } else {
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
        chai.assert.isDefined(container);
        chai.assert.isNotNull(container);
    });
});
