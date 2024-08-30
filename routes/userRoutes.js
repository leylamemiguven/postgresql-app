const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to log usernames
router.get('/', userController.logUsernames);

// Route to display the form
router.get('/new', userController.displayForm);

// Route to handle form submission
router.post('/new', userController.saveUsername);

module.exports = router;
