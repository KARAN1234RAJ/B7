import React, { useState } from "react";
import "./shoping.css";

const App = () => {
  const [categories, setCategories] = useState([
    {
      name: "Fruits",
      items: ["Apple", "Banana", "Mango"],
    },
    {
      name: "Vegetables",
      items: ["Carrot", "Tomato", "Broccoli"],
    },
    {
      name: "Dairy",
      items: ["Milk", "Cheese", "Yogurt"],
    },
  ]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [newItem, setNewItem] = useState("");
  const handleCategory = (e) => {
    console.log(e.name);

  };

  return (
    <div id="main">
      <h1>Shopping List</h1>
      <div className="categories">
        {/* Categories list should be displayed using the below HTML */}
        {categories.map((category) => {
          return (
            <div
              className={`category`}
              onClick={(e) => handleCategory(e)}
              name={category.name}
            >
              {category.name}{" "}
            </div>
          );
        })}
      </div>
      <div className="items">
        {/* List items should be displayed using the below HTML */}
        {categories.map((category) => {
          return category.items.map((item) => {
            return <div className="item">{item} </div>;
          });
        })}

        <div className="add-item-div">
          <input
            className="input-field"
            type="text"
            placeholder="Add new item"
          />
          <button className="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default App;
