const CharacterUltraW40K = require('../../models/models.UltraW40K/characters.UltraW40K.model');

const getCharactersUltraW40K = async (req, res) => {
  try {
    const allCharactersUltraW40K = await CharacterUltraW40K.find();
    return res.status(200).json(allCharactersUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterUltraW40K = await CharacterUltraW40K.findById(id)
      .populate('planetUltraW40K')
      .populate('countryUltraW40K');
    return res.status(200).json(oneCharacterUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterUltraW40K = async (req, res) => {
  try {
    const newCharacterUltraW40K = new CharacterUltraW40K(req.body);
    const createdCharacterUltraW40K = await newCharacterUltraW40K.save();
    return res.status(201).json(createdCharacterUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersUltraW40K = new CountryUltraW40K(req.body);
    putCharactersUltraW40K._id = id;
    const updateCharactersUltraW40K = await CharacterUltraW40K.findByIdAndUpdate(
      id,
      putCharactersUltraW40K,
      { new: true }
    );
    if (!updateCharactersUltraW40K) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterUltraW40K = await CharacterUltraW40K.findByIdAndDelete(id);
    if (!deleteCharacterUltraW40K) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersUltraW40K,
  getOneCharacterUltraW40K,
  postCharacterUltraW40K,
  putCharacterUltraW40K,
  deleteCharacterUltraW40K,
};
