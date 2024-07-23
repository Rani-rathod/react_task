
"use client";
import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      className={`button ${isOn ? 'button-on' : 'button-off'}`}
      onClick={handleClick}
    >
      {isOn ? 'On' : 'Off'}
    </button>
  );
}

export default ToggleButton;