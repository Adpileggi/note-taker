const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// write data to the JSON file
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), err =>
    err ? console.error(err) : console.info(`\nDatat written to ${destination}`)
    )

// function to read data from a file and append new data
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData)
        }
    });
};

// export functions
module.exports = {
    readFromFile,
    writeToFile,
    readAndAppend
}