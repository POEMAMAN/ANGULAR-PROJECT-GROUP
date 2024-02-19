const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const autoresSchema = new Schema(
    {
        author:{type:String,required:true},
        countrie:{type:String, required:true},
        books:[{type:Schema.Types.ObjectId,ref:"book"}],
        picture: {type:String, required:false},
        life: {type:String, required:false},
        resume: {type:String, required:false}
    },{
        timestamps:true
    }
)

const Autor = mongoose.model("autor", autoresSchema);

module.exports = Autor;