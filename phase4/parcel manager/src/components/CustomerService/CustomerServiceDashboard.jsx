import React from 'react';
import { Link } from 'react-router-dom';

const CustomerServiceDashboard = () => {
  return (
    <div className="customer-service-dashboard">
      <h2>Customer Service Dashboard</h2>
      <ul>
        <li><Link to="/customer-service/send-parcel">Send Parcel</Link></li>
        <li><Link to="/customer-service/view-parcels">View Parcels</Link></li>
      </ul>
    </div>
  );
};

export default CustomerServiceDashboard;
