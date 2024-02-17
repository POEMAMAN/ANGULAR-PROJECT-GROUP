const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sagasSchema = new Schema(
    {
        saga:{type:String},
        book:[{type:mongoose.Schema.Types.ObjectId,ref:"book"}]
    },{
        timestamps:true
    }
)

const Saga = mongoose.model("saga", sagasSchema);

module.exports = Saga;