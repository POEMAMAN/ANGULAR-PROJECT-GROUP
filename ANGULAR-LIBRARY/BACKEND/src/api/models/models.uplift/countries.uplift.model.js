const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema(
  {
    name: { type: String, required: true },
    clan: { type: String, required: true },
    foundatorSpecie: { type: String, required: false },
    clientSpecie: { type: String, required: false },
    resume: {type:String, required:false},
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const CountryUplift = mongoose.model('countryUplift', countrySchema);
module.exports = CountryUplift;
