import React, { useState } from 'react';

const NameForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(inputValue);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        {/* <label> */}
          Name:
          <input
            type="text"
            // value={inputValue}
            onChange={handleInputChange}
            className='input-field'
          />
        {/* </label> */}
        <button type="submit" className='submit-button'>Submit</button>
      </form>
      {submittedName && (
        <div className='submitted-name'>
          <h3>Submitted Name:</h3>
          <p>{submittedName}</p>
        </div>
      )}
    </div>
  );
};

export default NameForm;
