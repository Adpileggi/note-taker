const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// write data to the JSON file
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), err =>
    err ? console.error(err) : console.info(`\nDatat written to ${destination}`)
    )

// export functions
module.exports = {
    readFromFile,
    writeToFile
}