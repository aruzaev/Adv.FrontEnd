import { useState } from "react";

const FormValidate = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState(0);

  const [ouput, setOutput] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      //Error name cannot be empty
      setNameError("Name cannot be empty");
    }

    if (!age) {
        setAgeError("Age cannot be empty")
    }

    if (isNaN(age) || parseInt(age) <= 13) {
        setAgeError("too young")
    } 

    
  };

  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Name: </label>
          <input
            text="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setNameError('');
            }}
          />
          <br />
          <label>Enter Age: </label>
          <input
            text="text"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
              setAgeError(0);
            }}
          />
          <br />
          {nameError && <span style={{color:'red'}}>{nameError}</span>}
          <br />
          {ageError && <span style={{color:'red'}}>{ageError}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidate;