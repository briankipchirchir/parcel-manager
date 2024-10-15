import React, { useState } from 'react';

const SendParcel = () => {
  const [parcelDetails, setParcelDetails] = useState({
    recipient: '',
    address: '',
    weight: '',
  });

  const handleChange = (e) => {
    setParcelDetails({
      ...parcelDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Parcel sent:', parcelDetails);
  };

  return (
    <div className="send-parcel">
      <h2>Send Parcel</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipient:</label>
        <input type="text" name="recipient" onChange={handleChange} />
        <label>Address:</label>
        <input type="text" name="address" onChange={handleChange} />
        <label>Weight:</label>
        <input type="text" name="weight" onChange={handleChange} />
        <button type="submit">Send Parcel</button>
      </form>
    </div>
  );
};

export default SendParcel;
