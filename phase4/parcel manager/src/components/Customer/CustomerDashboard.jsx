import React from 'react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  return (
    <div className="customer-dashboard">
      <h2>Customer Dashboard</h2>
      <Link to="/customer/view-parcels">View Your Parcels</Link>
    </div>
  );
};

export default CustomerDashboard;
