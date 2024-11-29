const { Sale, Product, User } = require('../models');

module.exports = {
  async createSale(req, res) {
    const { userId, productId, quantity } = req.body;
    const product = await Product.findByPk(productId);
    if (product.stock < quantity) return res.status(400).json({ message: 'Stock insuficiente' });

    product.stock -= quantity;
    await product.save();

    const sale = await Sale.create({
      userId,
      productId,
      quantity,
      total: quantity * product.price,
    });

    res.json(sale);
  },

  async getSales(req, res) {
    const sales = await Sale.findAll({ include: [User, Product] });
    res.json(sales);
  },
};
