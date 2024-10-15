import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ul className="admin-links">
        <li><Link to="/admin/users">Manage Users</Link></li>
        <li><Link to="/admin/parcels">Manage Parcels</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
