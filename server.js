const express = require('express')
const path = require('path')
const route = require('./routes/index')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', route);

app.use(express.static('public'));

// GET route for homepage -- link html page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for notes.html?
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

// listening for local host
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);