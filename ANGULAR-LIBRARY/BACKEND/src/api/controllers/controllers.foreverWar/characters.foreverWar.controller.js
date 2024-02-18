const CharacterForeverWar = require('../../models/models.foreverWar/characters.foreverWar.model');

const getCharactersForeverWar = async (req, res) => {
  try {
    const allCharactersForeverWar = await CharacterForeverWar.find();
    return res.status(200).json(allCharactersForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterForeverWar = await CharacterForeverWar.findById(id)
      .populate('planetForeverWar')
      .populate('countryForeverWar');
    return res.status(200).json(oneCharacterForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterForeverWar = async (req, res) => {
  try {
    const newCharacterForeverWar = new CharacterForeverWar(req.body);
    const createdCharacterForeverWar = await newCharacterForeverWar.save();
    return res.status(201).json(createdCharacterForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersForeverWar = new CountryForeverWar(req.body);
    putCharactersForeverWar._id = id;
    const updateCharactersForeverWar = await CharacterForeverWar.findByIdAndUpdate(
      id,
      putCharactersForeverWar,
      { new: true }
    );
    if (!updateCharactersForeverWar) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterForeverWar = await CharacterForeverWar.findByIdAndDelete(id);
    if (!deleteCharacterForeverWar) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersForeverWar,
  getOneCharacterForeverWar,
  postCharacterForeverWar,
  putCharacterForeverWar,
  deleteCharacterForeverWar,
};
