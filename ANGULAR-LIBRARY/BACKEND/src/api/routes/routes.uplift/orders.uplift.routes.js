const express = require('express');
const {
  getOrdersUplift,
  getOneOrderUplift,
  postOrderUplift,
  putOrderUplift,
  deleteOrderUplift,
} = require('../../controllers/controllers.uplift/orders.uplift.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const orderUpliftRoutes = express.Router();

orderUpliftRoutes.get('/', getOrdersUplift);
orderUpliftRoutes.get('/:id', getOneOrderUplift);
orderUpliftRoutes.post('/post', [isAuth], upload.single('image'), postOrderUplift);
orderUpliftRoutes.put('/edit/:id', upload.single('image'), [isAuth], putOrderUplift);
orderUpliftRoutes.delete('/delete/:id', [isAuth], deleteOrderUplift);

module.exports = orderUpliftRoutes;

