const {Router} = require('express');
const { getAll, getSingle, getCategories } = require('../controllers/productController');
const router = Router();

router.get('/all', getAll);
router.get('/product/:id', getSingle);
router.get('/categories', getCategories);
router.post('/order');

module.exports = router;