import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/dashboard" className="px-2">Dashboard</Link>
        <Link to="/create-trip" className="px-2">Create Trip</Link>
      </div>
      <div>
        <Link to="/login" className="px-2">Login</Link>
        <Link to="/register" className="px-2">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
