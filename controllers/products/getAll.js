const { Product } = require('../../models');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).send(products);
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = getAllProducts;
