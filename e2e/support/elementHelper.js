let {pageElements} = require('./pageElements');
let {dataStore} = require('./dataStore');

let elementHelper = {
/* ============================================================================================================
name : getElementCSS
desc : Given an element key (eg. loginButton) and return CSS based on element and page it is on
=============================================================================================================== */
    getElementCSS: function getElementCSS(currentElement) {
        let elementCSS = pageElements.getPageElements(dataStore.getCurrentPage(), currentElement);
        return elementCSS
    }
};

module.exports = {elementHelper};