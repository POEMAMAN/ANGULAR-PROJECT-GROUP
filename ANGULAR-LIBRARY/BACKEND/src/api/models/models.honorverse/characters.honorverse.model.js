const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema(
  {
    name: { type: String, required: true },
    profession: { type: String, required: true },
    rank: { type: String, required: false },
    birthday: { type: String, required: false },
    planet: [{ type: Schema.Types.ObjectId, ref: 'planetHonorverse' }],
    country: [{ type: Schema.Types.ObjectId, ref: 'countryhonorverse' }],
    resume: {type: String},
    picture: {type: String}
  },
  {
    timestamps: true,
  }
);

const CharactersHonorverse = mongoose.model('characterhonorverse', charactersSchema);

module.exports = CharactersHonorverse;
