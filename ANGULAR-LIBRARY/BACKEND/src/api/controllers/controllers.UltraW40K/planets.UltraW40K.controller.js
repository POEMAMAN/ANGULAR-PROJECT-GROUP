const PlanetUltraW40K = require('../../models/models.UltraW40K/planets.UltraW40K.model');
const CountryUltraW40K = require('../../models/models.UltraW40K/countries.UltraW40K.model');

const getPlanetsUltraW40K = async (req, res) => {
  try {
    const allPlanetsUltraW40K = await PlanetUltraW40K.find();
    return res.status(200).json(allPlanetsUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetUltraW40K = await PlanetUltraW40K.findById(id).populate('planetUltraW40K');
    return res.status(200).json(onePlanetUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetUltraW40K = async (req, res) => {
  try {
    const newPlanetUltraW40K = new PlanetUltraW40K(req.body);
    const createdPlanetUltraW40K = await newPlanetUltraW40K.save();
    return res.status(201).json(createdPlanetUltraW40K);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsUltraW40K = new PlanetUltraW40K(req.body);
    putPlanetsUltraW40K._id = id;
    const updatePlanetsUltraW40K = await PlanetUltraW40K.findByIdAndUpdate(id, putPlanetsUltraW40K, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetUltraW40K = await PlanetUltraW40K.findByIdAndDelete(id);
    if (!deletePlanetUltraW40K) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsUltraW40K,
  getOnePlanetUltraW40K,
  postPlanetUltraW40K,
  putPlanetUltraW40K,
  deletePlanetUltraW40K,
};
