let {pageElements} = require('./pageElements');
let {dataStore} = require('./dataStore');

let elementHelper = {

    /* -- getElementCSS -- ====================================================== */
    getElementCSS: function getElementCSS(currentElement) {
        let elementCSS = pageElements.getPageElements(dataStore.getCurrentPage(), currentElement);
        return elementCSS
    }
};

module.exports = {elementHelper};