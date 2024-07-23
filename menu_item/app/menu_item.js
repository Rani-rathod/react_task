import React from 'react';

function MenuItem(){
    let item={
        name:"Chocolate Cake",
        price:"$500",
        description:"A sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent."
    }

  return (
    <div>
      <h2>Menu Name:{item.name}</h2>
      <p>price:{item.price}</p>
      <p>description:{item.description}</p>
    </div>
  );
}
export default MenuItem;

