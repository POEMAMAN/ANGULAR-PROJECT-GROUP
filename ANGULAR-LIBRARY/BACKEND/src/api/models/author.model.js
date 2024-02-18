const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const autoresSchema = new Schema(
    {
        author:{type:String,required:true},
        countrie:{type:String, required:true},
        books:[{type:Schema.Types.ObjectId,ref:"book"}]
    },{
        timestamps:true
    }
)

const Autor = mongoose.model("autor", autoresSchema);

module.exports = Autor;