const express = require('express');

const mainController = require('../controllers/mainController');

const { createUserValidator } = require('../validators/userValidator');

const router = express.Router();

router.get('/', mainController.home);
router.post('/', mainController.email);
router.get('/logout', mainController.deleteSession);
router.get('/desafio', mainController.desafio);
router.post('/desafio', createUserValidator, mainController.storeUser);

module.exports = router;
