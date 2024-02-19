const PlanetFundacion = require('../../models/models.fundacion/planets.fundacion.model');
const CountryFundacion = require('../../models/models.fundacion/countries.fundacion.model');

const getPlanetsFundacion = async (req, res) => {
  try {
    const allPlanetsFundacion = await PlanetFundacion.find();
    return res.status(200).json(allPlanetsFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetFundacion = await PlanetFundacion.findById(id).populate('planetFundacion');
    return res.status(200).json(onePlanetFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetFundacion = async (req, res) => {
  try {
    const newPlanetFundacion = new PlanetFundacion(req.body);
    const createdPlanetFundacion = await newPlanetFundacion.save();
    return res.status(201).json(createdPlanetFundacion);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsFundacion = new PlanetFundacion(req.body);
    putPlanetsFundacion._id = id;
    const updatePlanetsFundacion = await PlanetFundacion.findByIdAndUpdate(id, putPlanetsFundacion, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetFundacion = await PlanetFundacion.findByIdAndDelete(id);
    if (!deletePlanetFundacion) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsFundacion,
  getOnePlanetFundacion,
  postPlanetFundacion,
  putPlanetFundacion,
  deletePlanetFundacion,
};
