

import React from "react";

let name = "Green Tea";
let origin = "China";
let description = "Green tea is made from the leaves of the Camellia sinensis plant.These leaves are not dried and oxidized like the ones used to make black tea."
function Static(){
    return (
        <div>
            <h1>Name:{name}</h1>
            <h2>Origin:{origin}</h2>
            <p>description:{description}</p>
        </div>
    )
}
export default Static;
