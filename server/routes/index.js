const express = require('express');
const router = express.Router();
const { ClientController } = require('../controllers')

router.get('/clients', ClientController.getAll)

module.exports = router