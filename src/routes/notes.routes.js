const router = require('express').Router();
const Note = require('../models/Note') 
const {renderNoteForm,renderNewNote,renderNotes,renderEditForm,renderUpdateNotes,renderDeleteNotes } = require('../controllers/notes.controllers')
const {isAutenticated} = require('../helpers/Auth')
//new note
router.get('/notes/add',isAutenticated,renderNoteForm)

router.post('/notes/new',isAutenticated,renderNewNote) 

//get all notes
router.get ('/notes',isAutenticated , renderNotes )

//edit notes
router.get ('/notes/edit/:id', isAutenticated,renderEditForm) 

router.put('/notes/edit-note/:id', isAutenticated,renderUpdateNotes ) 

//delete notes
router.delete('/notes/delete/:id', isAutenticated,renderDeleteNotes)


module.exports = router;

