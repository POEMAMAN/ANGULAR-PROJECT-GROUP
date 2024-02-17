const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const universesSchema = new Schema(
    {
        nameUniverse:{type:String,required:true},
        author:{type:String,required:true},
        sagas1:{type:String,required:true},
        sagas2:{type:String,required:true},
        sagas3:{type:String,required:true},
        sagas4:{type:String,required:true},
        sagas5:{type:String,required:true},
        sagas6:{type:String,required:true},
        sagas7:{type:String,required:true},
        resume:{type:String,required:true},
        picture: {type: String}
    },{
        timestamps:true
    }
)

const Universe = mongoose.model("universe", universesSchema);

module.exports = Universe;