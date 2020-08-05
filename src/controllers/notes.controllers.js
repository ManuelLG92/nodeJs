const noteCtrl = { }; //{} --> es un objeto en JS
const Note = require('../models/Note');

noteCtrl.renderNoteForm = (req,res) => {
    res.render('notes/new.hbs')
}

noteCtrl.renderNewNote = async (req,res) => {
    console.table(req.body)
    const {title, description} = (req.body)
    const newNote = new Note({ title, description})
    newNote.user = req.user.id
    await newNote.save();

    req.flash('success_msg', "Your note has been addd successfully.")
    res.redirect('/notes')
}

noteCtrl.renderNotes = async (req,res) => {
    await Note.find({user : req.user.id}).sort({createdAt : 'desc'}) //Show notes of each user
    .then(documentos => {
        const contexto = {
            notes: documentos.map(documento => {
            return {
                title: documento.title,
                description: documento.description,
                id : documento._id
            }
        })
        }
        res.render('notes/allnotes', {
    notes: contexto.notes }) 
    })
    
}

noteCtrl.renderEditForm = async (req,res) => {
    const note = await Note.findById(req.params.id);
   
    if (note.user != req.user.id) { 
        req.flash('error_msg' , 'Dont authorized to edit that note. Sorry! ')
        return res.redirect('/notes')  
    }
    
    res.render("notes/edit-note", note);
}


noteCtrl.renderUpdateNotes = async (req,res) => {
    console.table(req.body)
    const {title, description} = (req.body) 
    await Note.findByIdAndUpdate(req.params.id, { title, description})
    req.flash('success_msg', "Your note has been updated successfully.")
    res.redirect('/notes')
}

noteCtrl.renderDeleteNotes = async (req,res) => {
    console.log('Id: '+req.params.id)
    await Note.findByIdAndDelete(req.params.id)
    req.flash('success_msg', "Your note has been deleted successfully.")
    res.redirect('/notes')
}



module.exports = noteCtrl;