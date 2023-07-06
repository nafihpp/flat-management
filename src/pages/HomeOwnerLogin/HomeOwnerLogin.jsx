import React, { useState } from 'react'

export const HomeOwnerLogin = () => {
    const [flatNumber, setFlatNumber] = useState('');

    const handleChange = (e) => {
      setFlatNumber(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform submit action with the flatNumber
    };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="flatNumber" className="label">Flat Number</label>
      <div className="input-wrapper">
        <input
          type="text"
          id="flatNumber"
          value={flatNumber}
          onChange={handleChange}
          placeholder="Enter flat number"
          className="input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  )
}
