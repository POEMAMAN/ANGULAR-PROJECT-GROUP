const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const universesSchema = new Schema(
    {
        nameUniverse:{type:String,required:true},
        author:{type:String,required:false},
        sagas1:{type:String,required:false},
        sagas2:{type:String,required:false},
        sagas3:{type:String,required:false},
        sagas4:{type:String,required:false},
        sagas5:{type:String,required:false},
        sagas6:{type:String,required:false},
        sagas7:{type:String,required:false},
        resume:{type:String,required:false},
        picture: {type: String}
    },{
        timestamps:true
    }
)

const Universe = mongoose.model("universe", universesSchema);

module.exports = Universe;