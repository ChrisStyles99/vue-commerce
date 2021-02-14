const {Router} = require('express');
const { getAll, getSingle } = require('../controllers/productController');
const router = Router();

router.get('/all', getAll);
router.get('/:id', getSingle);
router.post('/order');

module.exports = router;