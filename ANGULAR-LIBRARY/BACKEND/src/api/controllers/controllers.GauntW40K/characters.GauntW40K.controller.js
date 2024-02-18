const CharacterGauntW40K = require('../../models/models.GauntW40K/characters.GauntW40K.model');

const getCharactersGauntW40K = async (req, res) => {
  try {
    const allCharactersGauntW40K = await CharacterGauntW40K.find();
    return res.status(200).json(allCharactersGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterGauntW40K = await CharacterGauntW40K.findById(id)
      .populate('planetGauntW40K')
      .populate('countryGauntW40K');
    return res.status(200).json(oneCharacterGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterGauntW40K = async (req, res) => {
  try {
    const newCharacterGauntW40K = new CharacterGauntW40K(req.body);
    const createdCharacterGauntW40K = await newCharacterGauntW40K.save();
    return res.status(201).json(createdCharacterGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersGauntW40K = new CountryGauntW40K(req.body);
    putCharactersGauntW40K._id = id;
    const updateCharactersGauntW40K = await CharacterGauntW40K.findByIdAndUpdate(
      id,
      putCharactersGauntW40K,
      { new: true }
    );
    if (!updateCharactersGauntW40K) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterGauntW40K = await CharacterGauntW40K.findByIdAndDelete(id);
    if (!deleteCharacterGauntW40K) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersGauntW40K,
  getOneCharacterGauntW40K,
  postCharacterGauntW40K,
  putCharacterGauntW40K,
  deleteCharacterGauntW40K,
};
