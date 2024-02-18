const PlanetUplift = require('../../models/models.uplift/planets.uplift.model');
const CountryUplift = require('../../models/models.uplift/countries.uplift.model');

const getPlanetsUplift = async (req, res) => {
  try {
    const allPlanetsUplift = await PlanetUplift.find();
    return res.status(200).json(allPlanetsUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetUplift = await PlanetUplift.findById(id).populate('planetUplift');
    return res.status(200).json(onePlanetUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetUplift = async (req, res) => {
  try {
    const newPlanetUplift = new PlanetUplift(req.body);
    const createdPlanetUplift = await newPlanetUplift.save();
    return res.status(201).json(createdPlanetUplift);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsUplift = new PlanetUplift(req.body);
    putPlanetsUplift._id = id;
    const updatePlanetsUplift = await PlanetUplift.findByIdAndUpdate(id, putPlanetsUplift, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetUplift = await PlanetUplift.findByIdAndDelete(id);
    if (!deletePlanetUplift) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsUplift,
  getOnePlanetUplift,
  postPlanetUplift,
  putPlanetUplift,
  deletePlanetUplift,
};
