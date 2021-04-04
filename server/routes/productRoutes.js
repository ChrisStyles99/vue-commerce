const {Router} = require('express');
const { getAll, getSingle, getCategories, getProductsByCategory, makeOrder } = require('../controllers/productController');
const verifyToken = require('../middlewares/verifyToken');
const router = Router();

router.get('/all', getAll);
router.get('/product/:id', getSingle);
router.get('/categories', getCategories);
router.get('/category/:category', getProductsByCategory);
router.post('/order', verifyToken, makeOrder);

module.exports = router;