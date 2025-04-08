import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/api',
});

// Add token to every request if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// User APIs
export const registerUser = (userData) => API.post('/users/register', userData);
export const loginUser = (credentials) => API.post('/users/login', credentials);

// Trip APIs
export const createTrip = (tripData) => API.post('/trips/create', tripData);
export const getTripsByUser = (userId) => API.get(`/trips/${userId}`);
export const addItinerary = (tripId, itineraryData) => API.post(`/trips/${tripId}/itinerary`, itineraryData);

// Export PDF
export const exportTripPDF = (tripId) =>
  API.get(`/export/${tripId}`, { responseType: 'blob' });
