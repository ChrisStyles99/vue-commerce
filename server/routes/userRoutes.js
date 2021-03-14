const {Router} = require('express');
const router = Router();
const {login, register, getUser} = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/login', login);
router.post('/register', register);
router.get('/profile', verifyToken, getUser);

module.exports = router;