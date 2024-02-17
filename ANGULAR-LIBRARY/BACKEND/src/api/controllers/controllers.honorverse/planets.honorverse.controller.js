const PlanetHonorverse = require('../../models/models.honorverse/planets.honorverse.model');
const CountryHonorverse = require('../../models/models.honorverse/countries.honorverse.model');

const getPlanetsHonorverse = async (req, res) => {
  try {
    const allPlanetsHonorverse = await PlanetHonorverse.find();
    return res.status(200).json(allPlanetsHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetHonorverse = await PlanetHonorverse.findById(id).populate('planetHonorverse');
    return res.status(200).json(onePlanetHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetHonorverse = async (req, res) => {
  try {
    req.body.countryHonorverse = [];
    const allPlanetHonorverse = await PlanetHonorverse.find()
    const mapped = allPlanetHonorverse.map((elem) => {
    return {
      country: elem.country,
      id: elem._id
    };
  });
 
  mapped.forEach((country) => {
    if (country.planets === req.body.planets) {
      req.body.country.push(country.id)
    }
  });
    const newPlanetHonorverse = new PlanetHonorverse(req.body);
    const createdPlanetHonorverse = await newPlanetHonorverse.save();
    return res.status(201).json(createdPlanetHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putPlanetHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsHonorverse = new PlanetHonorverse(req.body);
    putPlanetsHonorverse._id = id;
    const updatePlanetsHonorverse = await PlanetHonorverse.findByIdAndUpdate(id, putPlanetsHonorverse, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetHonorverse = await PlanetHonorverse.findByIdAndDelete(id);
    if (!deletePlanetHonorverse) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsHonorverse,
  getOnePlanetHonorverse,
  postPlanetHonorverse,
  putPlanetHonorverse,
  deletePlanetHonorverse,
};
