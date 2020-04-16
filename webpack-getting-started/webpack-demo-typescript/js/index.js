"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function component() {
    var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());
//# sourceMappingURL=index.js.map