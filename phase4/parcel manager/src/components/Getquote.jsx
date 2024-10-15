// src/components/GetQuote.js
import React, { useState } from 'react';


const GetQuote = () => {
  const [quoteDetails, setQuoteDetails] = useState({
    from: '',
    destination: '',
    weight: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setQuoteDetails({
      ...quoteDetails,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'weight' && e.target.value > 100) {
      setError('Weight cannot exceed 100kg');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quoteDetails.weight > 100) {
      setError('Weight must be 100kg or less');
      return;
    }

    // Handle sending the quote details to the backend
    console.log('Quote request submitted:', quoteDetails);
  };

  return (
    <div className="quote-container">
      <h2>Get a Quote</h2>
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            name="from"
            id="from"
            placeholder="Enter origin"
            value={quoteDetails.from}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Enter destination"
            value={quoteDetails.destination}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Enter parcel weight"
            value={quoteDetails.weight}
            onChange={handleInputChange}
            max="100"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="quote-btn" disabled={error}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default GetQuote;
