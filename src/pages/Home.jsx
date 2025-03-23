import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import CSS file

const Home = () => {
  const navigate = useNavigate();

  const foodItems = [
    { name: "Pizza", image: "/images/pizza.jpg" },
    { name: "Burger", image: "/images/burger.jpg" },
    { name: "Sushi", image: "/images/sushi.jpg" },
    { name: "Pasta", image: "/images/pasta.jpg" }
  ];

  const restaurants = [
    { name: "Pizza House", image: "/images/pizza-house.jpg" },
    { name: "Burger Point", image: "/images/burger-point.jpg" },
    { name: "Sushi Spot", image: "/images/sushi-spot.jpg" }
  ];

  return (
    <div className="container" width="100%" margin='0'>
      {/* Full Width Food Delivery Image */}
      <img src="img.jpeg" alt="Food Delivery" className="full-width-image" />

      {/* Main Content Container */}
      <div className="content" width="100%">
        {/* Popular Food Items Section */}
        <div className="section">
          <h2 align="center">Popular Food Items</h2>
          <div className="food-items-container">
            {foodItems.map((food, index) => (
              <div key={index} className="food-card">
                <img src={food.image} alt={food.name} />
                <p>{food.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Available Restaurants Section */}
        <div className="section">
          <h2 align="center">Available Restaurants</h2>
          <div className="restaurants-container">
            {restaurants.map((restaurant, index) => (
              <div 
                key={index} 
                className="restaurant-card"
                onClick={() => navigate(`/restaurant/${restaurant.name}`)}
              >
                <img src={restaurant.image} alt={restaurant.name} />
                <h3>{restaurant.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
