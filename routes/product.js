const router = require('express').Router();
const productControllers = require('../controllers/products');

router.get('/', productControllers.getAllProducts);
router.post('/add', productControllers.addProduct);

module.exports = router;
