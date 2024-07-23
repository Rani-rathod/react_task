

import React from 'react';

function Dynamic(props){
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h2>Origin:{props.origin}</h2>
      <p>description:{props.description}</p>
    </div>
  );
}
export default Dynamic;



