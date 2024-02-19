const CharacterGalacticCenter = require('../../models/models.galacticCenter/characters.galacticCenter.model');

const getCharactersGalacticCenter = async (req, res) => {
  try {
    const allCharactersGalacticCenter = await CharacterGalacticCenter.find();
    return res.status(200).json(allCharactersGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterGalacticCenter = await CharacterGalacticCenter.findById(id)
      .populate('planetGalacticCenter')
      .populate('countryGalacticCenter');
    return res.status(200).json(oneCharacterGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterGalacticCenter = async (req, res) => {
  try {
    const newCharacterGalacticCenter = new CharacterGalacticCenter(req.body);
    const createdCharacterGalacticCenter = await newCharacterGalacticCenter.save();
    return res.status(201).json(createdCharacterGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersGalacticCenter = new CountryGalacticCenter(req.body);
    putCharactersGalacticCenter._id = id;
    const updateCharactersGalacticCenter = await CharacterGalacticCenter.findByIdAndUpdate(
      id,
      putCharactersGalacticCenter,
      { new: true }
    );
    if (!updateCharactersGalacticCenter) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterGalacticCenter = await CharacterGalacticCenter.findByIdAndDelete(id);
    if (!deleteCharacterGalacticCenter) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersGalacticCenter,
  getOneCharacterGalacticCenter,
  postCharacterGalacticCenter,
  putCharacterGalacticCenter,
  deleteCharacterGalacticCenter,
};
