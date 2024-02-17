const PlanetExpanse = require('../../models/models.expanse/planets.expanse.model');


const getPlanetsExpanse = async (req, res) => {
  try {
    const allPlanetsExpanse = await PlanetExpanse.find();
    return res.status(200).json(allPlanetsExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetExpanse = await PlanetExpanse.findById(id).populate('planetExpanse');
    return res.status(200).json(onePlanetExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetExpanse = async (req, res) => {
  try {
    const newPlanetExpanse = new PlanetExpanse(req.body);
    const createdPlanetExpanse = await newPlanetExpanse.save();
    return res.status(201).json(createdPlanetExpanse);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsExpanse = new PlanetExpanse(req.body);
    putPlanetsExpanse._id = id;
    const updatePlanetsExpanse = await PlanetExpanse.findByIdAndUpdate(id, putPlanetsExpanse, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetExpanse = await PlanetExpanse.findByIdAndDelete(id);
    if (!deletePlanetExpanse) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsExpanse,
  getOnePlanetExpanse,
  postPlanetExpanse,
  putPlanetExpanse,
  deletePlanetExpanse,
};
