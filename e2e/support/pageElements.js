// let {common} = require('../support/common')

let pageElements = {
    /* -- getPageElements -- ====================================================== */
    getPageElements: function getPageElements (currentPage, currentElement) {
        let pageElt = this.pageFor(currentPage)[currentElement]
        return pageElt
    },
    /* -- pageFor -- ====================================================== */

    pageFor: function (page) {
        return require('../page_definitions/' + page + '.json')
    },

    /* -- getApplicationPage -- ====================================================== */
    getApplicationPage: function getApplicationPage (currentPage, currentElement) {
        let appPage = this.appFor(currentPage)[currentElement]
        return appPage
    },

    /* -- appFor -- ====================================================== */

    appFor: function (page) {
        return require('../application_pages/' + page + '.json')
    },

    /* -- convertTextToIndex -- ====================================================== */
    convertTextToIndex: function convertTextToIndex (indexText) {
        let textToIndex =

            {
                'first': 0,
                'second': 1,
                'third': 2,
                'fourth': 3,
                'fifth': 4,
                'sixth': 5,
                'seventh': 6,
                'eighth': 7,
                'ninth': 8,
                'tenth': 9,
                'eleventh': 10,
                'twelfth': 11,
                'thirteenth': 12,
                'fourteenth': 13,
                'fifteenth': 14
            }
        return textToIndex[indexText]
    },
}
module.exports = {pageElements}