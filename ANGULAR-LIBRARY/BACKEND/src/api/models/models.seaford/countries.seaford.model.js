const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema(
  {
    name: { type: String, required: true },
    capital: { type: String, required: true },
    foundation_date: { type: String, required: false },
    resume: {type:String, required:false},
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const CountrySeaford = mongoose.model('countrySeaford', countrySchema);
module.exports = CountrySeaford;
