const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    title:{type:String,required:true},
    publication_year: {type: Number},
    saga:{ type: String, required: false },
    saga_index: {type:Number},
    universe:{ type: String, required: false },
    author: {type:String, required:true},
    resume: {type:String, required:false},
    picture: {type: String}

},
{
    timestamps: true,
  }
);

const BooksHonorverse = mongoose.model('booksHonorverse', booksSchema);

module.exports = BooksHonorverse;
