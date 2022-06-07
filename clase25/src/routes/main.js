const router = require('express').Router();

const mainController = require('../controllers/main');

const isAdminMiddleware = require('../middlewares/isAdmin');

router.get('/', mainController.index);
router.get('/admin', isAdminMiddleware, mainController.admin);

module.exports = router;