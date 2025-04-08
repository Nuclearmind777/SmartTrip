const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.post('/create', tripController.createTrip);
router.get('/:userId', tripController.getTripsByUser);
router.post('/:tripId/itinerary', tripController.addItinerary);

module.exports = router;
