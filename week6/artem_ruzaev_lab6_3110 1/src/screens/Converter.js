import React, { useState } from 'react';

function Converter() {
  const [distance, setDistance] = useState('');
  const [convertedDistance, setConvertedDistance] = useState('');
  const [error, setError] = useState('');

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputDistance = parseFloat(distance);

    if (isNaN(inputDistance) || inputDistance === 0) { 
      setError('Please enter a valid number.');
      setConvertedDistance(''); // blank out the number if its invalid input
    } else {
      const feet = inputDistance * 3.28084;
      setConvertedDistance(`${feet.toFixed(2)} feet`); // formats to two decimal points
      setError('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Distance in meters:
          <input type="text" value={distance} onChange={handleDistanceChange} />
        </label>
        <button type="submit">Convert</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {convertedDistance && <p>Converted Distance: {convertedDistance}</p>}
    </div>
  );
}

export default Converter;
