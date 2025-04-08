const { Trip, Itinerary } = require('../models');

exports.createTrip = async (req, res) => {
  const { user_id, destination, start_date, end_date, preferences } = req.body;
  try {
    const trip = await Trip.create({ user_id, destination, start_date, end_date, preferences });
    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getTripsByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const trips = await Trip.findAll({
      where: { user_id: userId },
      include: [Itinerary],
    });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.addItinerary = async (req, res) => {
  const { tripId } = req.params;
  const { day, activity, location, time } = req.body;
  try {
    const itinerary = await Itinerary.create({ trip_id: tripId, day, activity, location, time });
    res.status(201).json(itinerary);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
