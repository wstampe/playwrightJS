let stored_current_page = '';

let dataStore = {

/* ============================================================================================================
name : setCurrentPage
desc : Store the current page to keep track of where you are. [current page is the key in page defs and app pages]
=============================================================================================================== */
    setCurrentPage: function (currentPage) {
        stored_current_page = currentPage
    },

/* ============================================================================================================
name : getCurrentPage
desc : Get currently Stored the current page to keep track of where you are. [current page is the key in page defs and app pages]
=============================================================================================================== */
    getCurrentPage: function () {
        return stored_current_page
    }
}

module.exports = {dataStore}
