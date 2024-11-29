const { Product } = require('../models');

module.exports = {
  async getAll(req, res) {
    const products = await Product.findAll();
    res.json(products);
  },
  async create(req, res) {
    const product = await Product.create(req.body);
    res.json(product);
  },
  async update(req, res) {
    const { id } = req.params;
    await Product.update(req.body, { where: { id } });
    res.json({ message: 'Producto actualizado' });
  },
  async delete(req, res) {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.json({ message: 'Producto eliminado' });
  },
};
