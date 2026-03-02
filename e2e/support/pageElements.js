// let {common} = require('../support/common')

let pageElements = {

/* ============================================================================================================
name : getPageElements
desc : Given the current page and element, get CSS from the element key from page elements JSON
=============================================================================================================== */
    getPageElements: function getPageElements (currentPage, currentElement) {
        // CSS will be currentElement value in json
        let pageElt = this.pageFor(currentPage)[currentElement]
        return pageElt
    },

/* ============================================================================================================
name : pageFor
desc : return the json file based on page param. ([page].json)
=============================================================================================================== */
    pageFor: function (page) {
        // construct the json file path
        return require('../page_definitions/' + page + '.json')
    },

/* ============================================================================================================
name : getApplicationPage
desc : Given the current page, get URL from the page key from application pages JSON
=============================================================================================================== */
    getApplicationPage: function getApplicationPage (currentPage, currentElement) {
        let appPage = this.appFor(currentPage)[currentElement]
        return appPage
    },

/* ============================================================================================================
name : appFor
desc : return the json file based on page param. ([page].json)
=============================================================================================================== */
    appFor: function (page) {
        return require('../application_pages/' + page + '.json')
    },

/* ============================================================================================================
name : convertTextToIndex
desc : Map Index string to integer index and return integer index
=============================================================================================================== */
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