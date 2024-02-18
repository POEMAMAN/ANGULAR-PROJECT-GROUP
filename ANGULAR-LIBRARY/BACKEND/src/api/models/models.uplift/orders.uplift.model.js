const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const planetsSchema = new Schema(
  {
    name: { type: String, required: false },
    resume: {type:String, required:false},
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const PlanetsUplift = mongoose.model('planetUplift', planetsSchema);

module.exports = PlanetsUplift;
