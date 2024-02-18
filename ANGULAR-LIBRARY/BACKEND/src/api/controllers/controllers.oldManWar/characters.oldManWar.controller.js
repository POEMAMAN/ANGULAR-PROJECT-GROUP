const CharacterOldManWar = require('../../models/models.oldManWar/characters.oldManWar.model');

const getCharactersOldManWar = async (req, res) => {
  try {
    const allCharactersOldManWar = await CharacterOldManWar.find();
    return res.status(200).json(allCharactersOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterOldManWar = await CharacterOldManWar.findById(id)
      .populate('planetOldManWar')
      .populate('countryOldManWar');
    return res.status(200).json(oneCharacterOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterOldManWar = async (req, res) => {
  try {
    const newCharacterOldManWar = new CharacterOldManWar(req.body);
    const createdCharacterOldManWar = await newCharacterOldManWar.save();
    return res.status(201).json(createdCharacterOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersOldManWar = new CountryOldManWar(req.body);
    putCharactersOldManWar._id = id;
    const updateCharactersOldManWar = await CharacterOldManWar.findByIdAndUpdate(
      id,
      putCharactersOldManWar,
      { new: true }
    );
    if (!updateCharactersOldManWar) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterOldManWar = await CharacterOldManWar.findByIdAndDelete(id);
    if (!deleteCharacterOldManWar) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersOldManWar,
  getOneCharacterOldManWar,
  postCharacterOldManWar,
  putCharacterOldManWar,
  deleteCharacterOldManWar,
};
