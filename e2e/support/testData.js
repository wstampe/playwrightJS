const fs = require('fs');
const { readFileSync, readdir, readdirSync } = require("fs");

let testData = {

/* ============================================================================================================
********** UNDER CONSTRUCTION *************
name : returnTestData
desc : Where tests need test data, this will return json from path constructed with dataname param, ([dataname].json)
=============================================================================================================== */
    returnTestData: function (dataname) {

        // Grab the Data File based on Name...
        let dataFile = JSON.parse(fs.readFileSync(require.resolve('../tests/Data/' + dataname + '.json')));
        return dataFile;
    }
}

module.exports = {testData}