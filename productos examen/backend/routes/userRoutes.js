const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { registerUser, loginUser } = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.post('/register', registerUser);

// Ruta para login de usuario
router.post('/login', loginUser);



module.exports = router;
