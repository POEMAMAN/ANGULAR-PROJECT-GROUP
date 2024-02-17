const CharacterHonorverse = require('../../models/models.honorverse/characters.honorverse.model');

const getCharactersHonorverse = async (req, res) => {
  try {
    const allCharactersHonorverse = await CharacterHonorverse.find();
    return res.status(200).json(allCharactersHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterHonorverse = await CharacterHonorverse.findById(id)
      .populate('planetHonorverse')
      .populate('countryHonorverse');
    return res.status(200).json(oneCharacterHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterHonorverse = async (req, res) => {
  try {
    const newCharacterHonorverse = new CharacterHonorverse(req.body);
    const createdCharacterHonorverse = await newCharacterHonorverse.save();
    return res.status(201).json(createdCharacterHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersHonorverse = new CountryHonorverse(req.body);
    putCharactersHonorverse._id = id;
    const updateCharactersHonorverse = await CharacterHonorverse.findByIdAndUpdate(
      id,
      putCharactersHonorverse,
      { new: true }
    );
    if (!updateCharactersHonorverse) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterHonorverse = await CharacterHonorverse.findByIdAndDelete(id);
    if (!deleteCharacterHonorverse) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersHonorverse,
  getOneCharacterHonorverse,
  postCharacterHonorverse,
  putCharacterHonorverse,
  deleteCharacterHonorverse,
};
