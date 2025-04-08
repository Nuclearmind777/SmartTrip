import React from 'react';

function TripCard({ trip }) {
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h2 className="text-xl font-bold mb-2">{trip.destination}</h2>
      <p>Start Date: {trip.start_date}</p>
      <p>End Date: {trip.end_date}</p>
      <p>Preferences: {trip.preferences}</p>
      <h3 className="font-semibold mt-2">Itinerary:</h3>
      <ul>
        {trip.Itineraries.map(item => (
          <li key={item.id}>
            Day {item.day}: {item.activity} ({item.location}) at {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripCard;
