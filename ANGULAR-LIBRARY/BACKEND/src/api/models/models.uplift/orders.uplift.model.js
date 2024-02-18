const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ordersSchema = new Schema(
  {
    name: { type: String, required: false },
    resume: {type:String, required:false},
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const ordersUplift = mongoose.model('orderUplift', ordersSchema);

module.exports = ordersUplift;
