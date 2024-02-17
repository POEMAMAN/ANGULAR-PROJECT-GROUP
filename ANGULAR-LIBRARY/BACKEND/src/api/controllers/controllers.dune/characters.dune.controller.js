const CharacterDune = require('../../models/models.dune/characters.dune.model');

const getCharactersDune = async (req, res) => {
  try {
    const allCharactersDune = await CharacterDune.find();
    return res.status(200).json(allCharactersDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterDune = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterDune = await CharacterDune.findById(id)
      .populate('planetDune')
      .populate('countryDune');
    return res.status(200).json(oneCharacterDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterDune = async (req, res) => {
  try {
    const newCharacterDune = new CharacterDune(req.body);
    const createdCharacterDune = await newCharacterDune.save();
    return res.status(201).json(createdCharacterDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterDune = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersDune = new CountryDune(req.body);
    putCharactersDune._id = id;
    const updateCharactersDune = await CharacterDune.findByIdAndUpdate(
      id,
      putCharactersDune,
      { new: true }
    );
    if (!updateCharactersDune) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterDune = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterDune = await CharacterDune.findByIdAndDelete(id);
    if (!deleteCharacterDune) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersDune,
  getOneCharacterDune,
  postCharacterDune,
  putCharacterDune,
  deleteCharacterDune,
};
