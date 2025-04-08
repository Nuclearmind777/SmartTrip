import React, { useState } from 'react';
import axios from 'axios';

function CreateTripPage() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/trips/create`, {
        user_id: userId,
        destination,
        start_date: startDate,
        end_date: endDate,
        preferences,
      });
      alert('Trip created!');
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Trip creation failed!');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Create New Trip</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Preferences (comma separated)"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-purple-500 text-white px-4 py-2">
          Create Trip
        </button>
      </form>
    </div>
  );
}

export default CreateTripPage;
