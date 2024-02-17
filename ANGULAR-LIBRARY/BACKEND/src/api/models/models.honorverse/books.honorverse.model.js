const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    title:{type:String,required:true},
    publication_year: {type: Number},
    saga:[{type:mongoose.Schema.Types.ObjectId,ref:"saga"}],
    saga_index: {type:Number},
    universe:[{type:mongoose.Schema.Types.ObjectId,ref:"universe"}],
    author: {type:String, require:true},
    resume: {type: String},
    picture: {type: String}

},
{
    timestamps: true,
  }
);

const BooksHonorverse = mongoose.model('booksHonorverse', booksSchema);

module.exports = BooksHonorverse;
