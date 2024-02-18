const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const planetsSchema = new Schema(
  {
    name: { type: String, required: false },
    settled: { type: String, required: false },
    population: { type: String, required: false },
    capital: { type: String, required: false },
    location: { type: String, required: false },
    gravity: { type: String, required: false },
    country: {type:String,required:false},
    moons: { type: String, required: false },
    resume: {type:String, required:false},
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const PlanetsOldManWar = mongoose.model('planetOldManWar', planetsSchema);

module.exports = PlanetsOldManWar;
