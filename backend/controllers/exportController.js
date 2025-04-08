const PDFDocument = require('pdfkit');
const { Trip, Itinerary } = require('../models');

exports.exportTrip = async (req, res) => {
  const { tripId } = req.params;
  try {
    const trip = await Trip.findByPk(tripId, { include: [Itinerary] });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="trip-${tripId}.pdf"`);

    doc.pipe(res);

    doc.fontSize(20).text(`Trip to ${trip.destination}`, { underline: true });
    doc.moveDown();
    doc.fontSize(14).text(`Start Date: ${trip.start_date}`);
    doc.text(`End Date: ${trip.end_date}`);
    doc.text(`Preferences: ${trip.preferences}`);
    doc.moveDown();

    doc.fontSize(16).text('Itinerary:', { underline: true });
    trip.Itineraries.forEach(item => {
      doc.moveDown();
      doc.text(`Day ${item.day}: ${item.activity}`);
      if (item.location) doc.text(`Location: ${item.location}`);
      if (item.time) doc.text(`Time: ${item.time}`);
    });

    doc.end();
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
