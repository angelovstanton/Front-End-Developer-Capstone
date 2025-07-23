import React from "react";
import "./Specials.css";
import Button from "../../../components/Button/Button";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const specialsList = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "A classic Greek salad with crisp lettuce, fresh peppers, olives, and Chicago-style feta, topped with garlic and rosemary croutons.",
    image:
      "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: "$15.77",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta features grilled bread rubbed with garlic, then finished with a touch of salt and a drizzle of olive oil.",
    image:
      "https://images.pexels.com/photos/4969892/pexels-photo-4969892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: "$8.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image:
        "https://images.pexels.com/photos/4099128/pexels-photo-4099128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: "$7.49",
    },
  ];

  const Specials = () => {
    const navigate = useNavigate();

  // Handles navigation to the orders page
  const handleMenuClick = () => {
    navigate(pages.get("orders").path);
  };

  // TODO: Add filter for dietary preferences

  return (
    <section className="specials-section" aria-labelledby="specials-title">
      <header className="specials-header">
        <h1 id="specials-title" className="specials-title">Specials</h1>
        <Button title="Online Menu" onClick={handleMenuClick} />
      </header>
      <ul className="specials-list">
        {specialsList.map((special) => (
          <li key={special.id} className="specials-list-item">
            <FoodCard
              title={special.title}
              description={special.description}
              image={special.image}
              price={special.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Specials;
