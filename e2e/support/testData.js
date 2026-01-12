const fs = require('fs');
const { readFileSync, readdir, readdirSync } = require("fs");

let testData = {

    /* -- returnTestData -- ====================================================== */
    returnTestData: function (dataname) {
        //console.log('Data File: ' + require.resolve('../tests/Data/' + dataname + '.json'));
        let dataFile = JSON.parse(fs.readFileSync(require.resolve('../tests/Data/' + dataname + '.json')));
        // console.log(dataFile);
        return dataFile;
    }
}

module.exports = {testData}