const PlanetGalacticCenter = require('../../models/models.galacticCenter/planets.galacticCenter.model');
const CountryGalacticCenter = require('../../models/models.galacticCenter/countries.galacticCenter.model');

const getPlanetsGalacticCenter = async (req, res) => {
  try {
    const allPlanetsGalacticCenter = await PlanetGalacticCenter.find();
    return res.status(200).json(allPlanetsGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetGalacticCenter = await PlanetGalacticCenter.findById(id).populate('planetGalacticCenter');
    return res.status(200).json(onePlanetGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetGalacticCenter = async (req, res) => {
  try {
    const newPlanetGalacticCenter = new PlanetGalacticCenter(req.body);
    const createdPlanetGalacticCenter = await newPlanetGalacticCenter.save();
    return res.status(201).json(createdPlanetGalacticCenter);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsGalacticCenter = new PlanetGalacticCenter(req.body);
    putPlanetsGalacticCenter._id = id;
    const updatePlanetsGalacticCenter = await PlanetGalacticCenter.findByIdAndUpdate(id, putPlanetsGalacticCenter, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetGalacticCenter = await PlanetGalacticCenter.findByIdAndDelete(id);
    if (!deletePlanetGalacticCenter) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsGalacticCenter,
  getOnePlanetGalacticCenter,
  postPlanetGalacticCenter,
  putPlanetGalacticCenter,
  deletePlanetGalacticCenter,
};
