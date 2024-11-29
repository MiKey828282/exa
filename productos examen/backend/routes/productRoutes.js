const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

const { registerUser, loginUser } = require('../controllers/userController');


router.get('/', productController.getAll);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;
