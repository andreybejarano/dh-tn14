const express = require('express');

const userController = require('../controllers/userController');


const router = express.Router();

router.post('/', userController.create);
router.get('/', userController.all);


module.exports = router;
