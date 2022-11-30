const express = require('express');
const router = express.Router();
const { ClientController } = require('../controllers')

router.get('/clients', ClientController.getAll)

router.patch(
  '/clients/:clientId',
  ClientController.validateClientId,
  ClientController.validateBody,
  ClientController.updateById,
)

module.exports = router
