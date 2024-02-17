const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const universesSchema = new Schema(
    {
        nameUniverse:{type:String,required:true},
        author:{type:String,required:true},
        sagas1:{type:String},
        sagas2:{type:String},
        sagas3:{type:String},
        sagas4:{type:String},
        sagas5:{type:String},
        sagas6:{type:String},
        sagas7:{type:String},
        resume:{type:String},
        picture: {type: String}
    },{
        timestamps:true
    }
)

const Universe = mongoose.model("universe", universesSchema);

module.exports = Universe;