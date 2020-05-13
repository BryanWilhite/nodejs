var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import component from './word-count.component.js';
class DOMTestingUtility {
    static getDocumentNode(selector) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
describe(component.name, function () {
    it('is rendered', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const container = yield DOMTestingUtility.getDocumentNode('#web-component-container');
            chai.assert.isDefined(container);
            chai.assert.isNotNull(container);
        });
    });
});
//# sourceMappingURL=word-count.component.spec.js.map