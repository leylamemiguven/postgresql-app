const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/create-username', userController.createUsernameGet);
router.post('/create-username', userController.createUsernamePost);
router.get('/', userController.getUsernames);

module.exports = router;
