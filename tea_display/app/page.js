import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Static from "./static_tea";
import Dynamic from "./dynamic_tea"


let teas = [
  {
    name: "Green Tea",
    origin: "China",
    description: "Green tea is made from the leaves of Camellia sinensis that have not undergone the same withering and oxidation process used to make black tea."
  },
  {
    name: "Black Tea",
    origin: "India",
    description: "Black tea is more oxidized than oolong, green and white teas. It generally has a stronger flavor than other teas."
  },
  {
    name: "Oolong Tea",
    origin: "Taiwan",
    description: "Oolong is a traditional semi-oxidized Chinese tea produced through a process including withering the plant under strong sun and oxidation before curling and twisting."
  }
];


function App(){
  return (
    <div>
      <Static/>

      {/* 3rd point */}
      {teas.map((tea)=>(
        <Dynamic
          name={tea.name}
          origin={tea.origin}
          description={tea.description}
        />
      ))}

      {/* 2nd point */}
      <Dynamic
        name = {teas[0].name}
        origin = {teas[0].origin}
        description = {teas[0].description}
      /> 

      <Dynamic
        name={teas[1].name}
        origin={teas[1].origin}
        description={teas[1].description}
      />


      <Dynamic
        name={teas[2].name}
        origin={teas[2].origin}
        description={teas[2].description}
      />
    </div>
  );
  
}
export default App; 
