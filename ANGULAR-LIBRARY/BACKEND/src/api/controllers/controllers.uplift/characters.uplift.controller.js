const CharacterUplift = require('../../models/models.uplift/characters.uplift.model');

const getCharactersUplift = async (req, res) => {
  try {
    const allCharactersUplift = await CharacterUplift.find();
    return res.status(200).json(allCharactersUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterUplift = await CharacterUplift.findById(id)
      .populate('planetUplift')
      .populate('countryUplift');
    return res.status(200).json(oneCharacterUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterUplift = async (req, res) => {
  try {
    const newCharacterUplift = new CharacterUplift(req.body);
    const createdCharacterUplift = await newCharacterUplift.save();
    return res.status(201).json(createdCharacterUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersUplift = new CountryUplift(req.body);
    putCharactersUplift._id = id;
    const updateCharactersUplift = await CharacterUplift.findByIdAndUpdate(
      id,
      putCharactersUplift,
      { new: true }
    );
    if (!updateCharactersUplift) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterUplift = await CharacterUplift.findByIdAndDelete(id);
    if (!deleteCharacterUplift) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersUplift,
  getOneCharacterUplift,
  postCharacterUplift,
  putCharacterUplift,
  deleteCharacterUplift,
};
