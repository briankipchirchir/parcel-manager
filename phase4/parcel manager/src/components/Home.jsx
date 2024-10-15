import React from 'react';
import GetQuote from './Getquote';
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Parcel Management System</h1>
      <p>Efficiently manage your parcels with ease!</p>
      <GetQuote/>
    </div>
  );
};

export default HomePage;
