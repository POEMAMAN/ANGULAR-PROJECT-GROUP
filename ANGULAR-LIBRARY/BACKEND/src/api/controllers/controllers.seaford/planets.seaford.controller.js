const PlanetSeaford = require('../../models/models.Seaford/planets.Seaford.model');
const CountrySeaford = require('../../models/models.seaford/countries.seaford.model');

const getPlanetsSeaford = async (req, res) => {
  try {
    const allPlanetsSeaford = await PlanetSeaford.find();
    return res.status(200).json(allPlanetsSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetSeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetSeaford = await PlanetSeaford.findById(id).populate('planetSeaford');
    return res.status(200).json(onePlanetSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetSeaford = async (req, res) => {
  try {
    const newPlanetSeaford = new PlanetSeaford(req.body);
    const createdPlanetSeaford = await newPlanetSeaford.save();
    return res.status(201).json(createdPlanetSeaford);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetSeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsSeaford = new PlanetSeaford(req.body);
    putPlanetsSeaford._id = id;
    const updatePlanetsSeaford = await PlanetSeaford.findByIdAndUpdate(id, putPlanetsSeaford, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetSeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetSeaford = await PlanetSeaford.findByIdAndDelete(id);
    if (!deletePlanetSeaford) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsSeaford,
  getOnePlanetSeaford,
  postPlanetSeaford,
  putPlanetSeaford,
  deletePlanetSeaford,
};
