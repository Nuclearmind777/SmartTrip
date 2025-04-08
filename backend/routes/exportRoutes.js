const express = require('express');
const router = express.Router();
const exportController = require('../controllers/exportController');

router.get('/:tripId', exportController.exportTrip);

module.exports = router;
