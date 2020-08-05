const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://DBname:DBPasswrod@cluster0-nnwjz.mongodb.net/test?retryWrites=true&w=majority', {
useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log("Mongo Database is connected") )  
    .catch(err => console.error(err));