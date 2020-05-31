const { Product } = require('../../models');

const addProduct = async (req, res) => {
  try {
    const productData = req.body;
    const $product = new Product(productData);
    const newProduct = await $product.save();
    return res.status(200).send(newProduct);
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = addProduct;
