// link to express
const router = require('express').Router();
// helper functions
const idFunc = require('../helpers/idFunc')
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET route for existing info in db.json
router.get('/', (req, res) => {
    console.info(`${req.method} request reveived for notes`)
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

// Post route to take in info from the notes.html form
router.post('/', (req, res) => {
    console.info(`${req.method} request reveived for notes`);

    const { title, text, id } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: idFunc()
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added sucessfully`)
    } else {
        res.errored(`Error in added note`)
    }
});

// export file
module.exports = router;