let stored_current_page = '';



let dataStore = {



    /* -- setCurrentPage -- ====================================================== */

    setCurrentPage: function (currentPage) {

        stored_current_page = currentPage

    },

    /* -- getCurrentPage -- ====================================================== */

    getCurrentPage: function () {

        return stored_current_page

    }

}



module.exports = {dataStore}
