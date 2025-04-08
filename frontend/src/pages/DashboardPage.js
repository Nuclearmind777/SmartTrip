import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TripCard from '../components/TripCard';

function DashboardPage() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/trips/${userId}`);
        setTrips(res.data);
      } catch (error) {
        alert('Failed to fetch trips');
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Your Trips</h2>
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default DashboardPage;
