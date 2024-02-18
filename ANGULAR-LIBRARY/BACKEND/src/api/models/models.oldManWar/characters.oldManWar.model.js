const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema(
  {
    name: { type: String, required: true },
    profession: { type: String, required: false },
    rank: { type: String, required: false },
    birthday: { type: String, required: false },
    planet: { type: String, required: false },
    country: { type: String, required: false },
    resume: {type:String, required:false},
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const CharactersOldManWar = mongoose.model('characterOldManWar', charactersSchema);

module.exports = CharactersOldManWar;
