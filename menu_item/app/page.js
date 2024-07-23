import Image from "next/image";
import styles from "./page.module.css";
import MenuItem from "./menu_item";
import Menu from "./menu";


  

let menuItems = [
  {
    name: "Pizza",
    price: 12.99,
    description: "Classic pizza with tomato sauce and mozzarella cheese."
  },
  {
    name: "Caesar Salad",
    price: 8.99,
    description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese."
  },
  {
    name: "Spaghetti Carbonara",
    price: 15.49,
    description: "Spaghetti with creamy carbonara sauce, pancetta, and parmesan cheese."
  }
];

function Home() {
  return (
    <div className="Box">
      <h1>Menu</h1>

      <MenuItem/>

      {menuItems.map((item) => (
        <Menu
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}

      <Menu
        name={menuItems[0].name}
        price={menuItems[0].price}
        description={menuItems[0].description}
      />

      <Menu
        name={menuItems[1].name}
        price={menuItems[1].price}
        description={menuItems[1].description}
      />

      <Menu
        name={menuItems[2].name}
        price={menuItems[2].price}
        description={menuItems[2].description}
      />
    </div>
  );
}
export default Home;