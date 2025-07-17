// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
  // Handler for when the button receives focus
  const handleFocus = () => {
    console.log('Good!');
  };

  // Handler for when the button loses focus
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button onFocus={handleFocus} onBlur={handleBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;



