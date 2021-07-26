var express = require('express');
var router = express.Router();
const authController = require('../../controllers/authorController');

router.get('/auth/token', authController.getToken);

module.exports = router;