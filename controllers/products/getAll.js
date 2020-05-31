const { Product } = require('../../models');

const getAllProducts = async (req, res) => {
  try {
    const pageNo = parseInt(req.query.pageNo) || 1;
    const size = parseInt(req.query.size) || 10;

    if (pageNo < 0 || pageNo === 0) {
      return res.status(422).send({
        message: 'invalid page number, should start with 1',
      });
    }

    const skipBy = size * (pageNo - 1);
    const products = await Product.find({}).skip(skipBy).limit(size);

    Product.count({}, (err, count) => {
      if (err) {
        return res.status(500).send({
          message: err.message,
        });
      }
      const totalPages = Math.ceil(count / size);
      return res
        .status(200)
        .send({ total: count, pages: totalPages, products });
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = getAllProducts;
