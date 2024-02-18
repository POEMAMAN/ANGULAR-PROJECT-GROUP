const CharacterSeaford = require('../../models/models.seaford/characters.seaford.model');

const getCharactersSeaford = async (req, res) => {
  try {
    const allCharactersSeaford = await CharacterSeaford.find();
    return res.status(200).json(allCharactersSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterSeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterSeaford = await CharacterSeaford.findById(id)
      .populate('planetSeaford')
      .populate('countrySeaford');
    return res.status(200).json(oneCharacterSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterSeaford = async (req, res) => {
  try {
    const newCharacterSeaford = new CharacterSeaford(req.body);
    const createdCharacterSeaford = await newCharacterSeaford.save();
    return res.status(201).json(createdCharacterSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterSeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersSeaford = new CountrySeaford(req.body);
    putCharactersSeaford._id = id;
    const updateCharactersSeaford = await CharacterSeaford.findByIdAndUpdate(
      id,
      putCharactersSeaford,
      { new: true }
    );
    if (!updateCharactersSeaford) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterSeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterSeaford = await CharacterSeaford.findByIdAndDelete(id);
    if (!deleteCharacterSeaford) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersSeaford,
  getOneCharacterSeaford,
  postCharacterSeaford,
  putCharacterSeaford,
  deleteCharacterSeaford,
};
