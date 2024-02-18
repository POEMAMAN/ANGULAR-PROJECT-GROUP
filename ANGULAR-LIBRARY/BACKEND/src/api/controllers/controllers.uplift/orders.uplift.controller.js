const OrderUplift = require('../../models/models.uplift/orders.uplift.model');
const CountryUplift = require('../../models/models.uplift/countries.uplift.model');

const getOrdersUplift = async (req, res) => {
  try {
    const allOrdersUplift = await OrderUplift.find();
    return res.status(200).json(allOrdersUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneOrderUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const oneOrderUplift = await OrderUplift.findById(id).populate('OrderUplift');
    return res.status(200).json(oneOrderUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postOrderUplift = async (req, res) => {
  try {
    const newOrderUplift = new OrderUplift(req.body);
    const createdOrderUplift = await newOrderUplift.save();
    return res.status(201).json(createdOrderUplift);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putOrderUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const putOrdersUplift = new OrderUplift(req.body);
    putOrdersUplift._id = id;
    const updateOrdersUplift = await OrderUplift.findByIdAndUpdate(id, putOrdersUplift, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Order not found' });
    }
    return res.status(200).json(updateOrdersUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteOrderUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOrderUplift = await OrderUplift.findByIdAndDelete(id);
    if (!deleteOrderUplift) {
      return res.status(404).json({ message: 'Order not found' });
    }
    return res.status(200).json(deleteOrderUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getOrdersUplift,
  getOneOrderUplift,
  postOrderUplift,
  putOrderUplift,
  deleteOrderUplift,
};
