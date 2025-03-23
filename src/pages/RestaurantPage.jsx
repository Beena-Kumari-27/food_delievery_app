import React from "react";
import { useParams } from "react-router-dom";
import "./RestaurantStyles.css";

const RestaurantPage = () => {
  const { name } = useParams();

  const restaurantData = {
    "Pizza House": [
      { name: "Margherita Pizza", price: "$12", image: "pizza1.jpg" },
      { name: "Pepperoni Pizza", price: "$15", image: "pizza2.jpg" }
    ],
    "Burger Point": [
      { name: "Cheese Burger", price: "$8", image: "burger1.jpg" },
      { name: "Veggie Burger", price: "$7", image: "burger2.jpg" }
    ],
    "Sushi Spot": [
      { name: "Salmon Sushi", price: "$10", image: "sushi1.jpg" },
      { name: "Tuna Sushi", price: "$12", image: "sushi2.jpg" }
    ]
  };

  return (
    <div className="container">
      <h2>{name}</h2>
      <div className="menu-items">
        {restaurantData[name]?.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={`/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p className="price">{item.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
