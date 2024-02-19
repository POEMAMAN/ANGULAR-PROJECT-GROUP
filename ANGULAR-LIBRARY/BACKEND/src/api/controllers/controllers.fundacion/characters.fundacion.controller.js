const CharacterFundacion = require('../../models/models.fundacion/characters.fundacion.model');

const getCharactersFundacion = async (req, res) => {
  try {
    const allCharactersFundacion = await CharacterFundacion.find();
    return res.status(200).json(allCharactersFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterFundacion = await CharacterFundacion.findById(id)
      .populate('planetFundacion')
      .populate('countryFundacion');
    return res.status(200).json(oneCharacterFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterFundacion = async (req, res) => {
  try {
    const newCharacterFundacion = new CharacterFundacion(req.body);
    const createdCharacterFundacion = await newCharacterFundacion.save();
    return res.status(201).json(createdCharacterFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersFundacion = new CountryFundacion(req.body);
    putCharactersFundacion._id = id;
    const updateCharactersFundacion = await CharacterFundacion.findByIdAndUpdate(
      id,
      putCharactersFundacion,
      { new: true }
    );
    if (!updateCharactersFundacion) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterFundacion = await CharacterFundacion.findByIdAndDelete(id);
    if (!deleteCharacterFundacion) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersFundacion,
  getOneCharacterFundacion,
  postCharacterFundacion,
  putCharacterFundacion,
  deleteCharacterFundacion,
};
