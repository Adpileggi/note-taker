// link to express
const router = require('express').Router();
// helper functions
const idFunc = require('../helpers/idFunc')
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
// import notes form db.json
const notesDb = require('../db/db.json')
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

router.delete('/:id', (req, res) => {
    console.info(`${req.method} request reveived for notes`);
    readFromFile('./db/db.json').then((data) => {

    console.log(req.params.id)
    console.log(data)
    const id = req.params.id;
    const arrayDb = JSON.parse(data)

    const noteToDelete = arrayDb.find(el => el.id === id)
    console.log(noteToDelete)
    
    const indexToDelete = arrayDb.indexOf(noteToDelete)
    console.log(indexToDelete)
    
    // remove from array using splice method
    arrayDb.splice(indexToDelete, 1)
    console.log(arrayDb)
    // write new spliced array to db.json
    writeToFile('./db/db.json', arrayDb);        

    // return to front end
    res.json(`Note deleted`)
    
    });
})

// export file
module.exports = router;