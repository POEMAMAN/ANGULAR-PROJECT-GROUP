const CharacterExpanse = require('../../models/models.expanse/characters.expanse.model');

const getCharactersExpanse = async (req, res) => {
  try {
    const allCharactersExpanse = await CharacterExpanse.find();
    return res.status(200).json(allCharactersExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterExpanse = await CharacterExpanse.findById(id)
      .populate('planetExpanse')
      .populate('countryExpanse');
    return res.status(200).json(oneCharacterExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterExpanse = async (req, res) => {
  try {
    const newCharacterExpanse = new CharacterExpanse(req.body);
    const createdCharacterExpanse = await newCharacterExpanse.save();
    return res.status(201).json(createdCharacterExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersExpanse = new CountryExpanse(req.body);
    putCharactersExpanse._id = id;
    const updateCharactersExpanse = await CharacterExpanse.findByIdAndUpdate(
      id,
      putCharactersExpanse,
      { new: true }
    );
    if (!updateCharactersExpanse) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterExpanse = await CharacterExpanse.findByIdAndDelete(id);
    if (!deleteCharacterExpanse) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersExpanse,
  getOneCharacterExpanse,
  postCharacterExpanse,
  putCharacterExpanse,
  deleteCharacterExpanse,
};
