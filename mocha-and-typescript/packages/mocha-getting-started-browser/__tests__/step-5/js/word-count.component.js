// Create a class for the element
export default class WordCount extends HTMLParagraphElement {
    static countWords(node) {
        const text = node.innerText || node.textContent;
        if (!text) {
            return -1;
        }
        return text.split(/\s+/g).length;
    }
    constructor() {
        // Always call super first in constructor
        super();
        // count words in element's parent element
        const wcParent = this.parentNode;
        const getCount = () => {
            const count = `Words: ${WordCount.countWords(wcParent)}`;
            return count;
        };
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });
        // Create text node and add word count to it
        const text = document.createElement('span');
        text.textContent = getCount();
        // Append it to the shadow root
        shadow.appendChild(text);
        // Update count when element content changes
        setInterval(function () {
            text.textContent = getCount();
        }, 200);
    }
}
WordCount.elementName = 'word-count';
// Define the new element
customElements.define(WordCount.elementName, WordCount, { extends: 'p' });
//# sourceMappingURL=word-count.component.js.map