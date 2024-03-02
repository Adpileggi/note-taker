// link to express
const router = require('express').Router();
const { readFromFile, writeToFile } = require('../helpers/fsUtils');

// GET route for existing info in db.json
router.get('/', (req, res) => {
    console.info(`${req.method} request reveived for notes`)
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

// Post route to take in info from the notes.html form

// export file