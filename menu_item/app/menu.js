
import React from "react";

function Menu(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>price ${props.price}</p>
            <p>Description:{props.description}</p>
        </div>
    )

}
export default Menu;
// rafce