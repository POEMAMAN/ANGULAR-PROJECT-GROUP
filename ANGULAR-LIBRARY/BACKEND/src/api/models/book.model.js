const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema(
    {
        title:{type:String,required:true},
        publication_year: {type: Number},
        saga:{type:String},
        saga_index: {type:Number},
        universe: {type: String},
        author: {type:String, require:true},
        picture: {type: String}

    },{
        timestamps:true
    }
)

const Book = mongoose.model("book", booksSchema);

module.exports = Book;