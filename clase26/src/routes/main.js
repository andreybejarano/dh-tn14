const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.home);
router.post('/', mainController.email);
router.get('/logout', mainController.deleteSession);
router.get('/desafio', mainController.desafio);
router.post('/desafio', mainController.storeUser);

module.exports = router;
