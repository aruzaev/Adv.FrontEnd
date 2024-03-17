import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = ({ setUsage }) => {
  const [morning, setMorning] = useState("");
  const [afternoon, setAfternoon] = useState("");
  const [evening, setEvening] = useState("");
  const [error, setError] = useState("");

  const saveUsage = () => {
    if (
      morning < 0 ||
      afternoon < 0 ||
      evening < 0 ||
      isNaN(morning) ||
      isNaN(afternoon) ||
      isNaN(evening)
    ) {
      setError("Please enter a valid number.");
    } else {
      setUsage({ morning, afternoon, evening });
      setError("");
    }
  };

  return (
    <div className="form-component">
      <div className="title">
        <h1>Humber Hydro</h1>
        <p>By Artem Ruzaev (n01497403)</p>
      </div>
      <div className="input-container">
        <label>Morning usage : </label>
        <input
          type="text"
          placeholder="Enter morning usage (kWh)"
          value={morning}
          onChange={(event) => setMorning(event.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Afternoon usage : </label>
        <input
          type="text"
          placeholder="Enter afternoon usage (kWh)"
          value={afternoon}
          onChange={(event) => setAfternoon(event.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Evening usage : </label>
        <input
          type="text"
          placeholder="Enter the evening usage (kWh)"
          value={evening}
          onChange={(event) => setEvening(event.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={saveUsage}>Save</button>
    </div>
  );
};

export default FormComponent;
