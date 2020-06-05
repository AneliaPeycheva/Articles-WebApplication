const mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String
});

const Article = mongoose.model('Articles', articleSchema);

module.exports=Article