const router = require('express').Router()
// import modules
const notes = require('./notes')

// use route
router.use('/notes', notes)
// export file
module.exports = router;