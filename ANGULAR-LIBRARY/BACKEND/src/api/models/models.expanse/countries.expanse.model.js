const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema(
  {
    name: { type: String, required: true },
    capital: { type: String, required: true },
    foundation_date: { type: String, required: false },
    resume: {type: String},
    picture: {type: String}
  },
  {
    timestamps: true,
  }
);

const CountryExpanse = mongoose.model('countryExpanse', countrySchema);
module.exports = CountryExpanse;
