import React, { useState, useEffect } from 'react';

const ViewCustomerParcels = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    // Fetch customer-specific parcels (mocked for now)
    const customerParcels = [
      { id: 1, status: 'In Transit', deliveryDate: '2024-10-20' },
      { id: 2, status: 'Delivered', deliveryDate: '2024-10-10' },
    ];
    setParcels(customerParcels);
  }, []);

  return (
    <div className="view-parcels">
      <h2>Your Parcels</h2>
      {parcels.length > 0 ? (
        <ul>
          {parcels.map((parcel) => (
            <li key={parcel.id}>
              <p>Parcel ID: {parcel.id}</p>
              <p>Status: {parcel.status}</p>
              <p>Estimated Delivery: {parcel.deliveryDate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No parcels found.</p>
      )}
    </div>
  );
};

export default ViewCustomerParcels;
