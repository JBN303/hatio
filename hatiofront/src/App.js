import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function App() {
  return (
    <div>
      <h1>Welcome to the Library Management System</h1>
      <p>Click below to go to the Admin Dashboard</p>
      <Link to="/admin-dashboard">Go to Admin Dashboard</Link> {/* Link to Admin Dashboard */}
    </div>
  );
}

export default App;
