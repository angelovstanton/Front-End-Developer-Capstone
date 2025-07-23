import React from "react";
import "./FoodCard.css";
import deliveryIcon from "../../assets/delivery.svg";

const FoodCard = ({ title, description, image, price }) => {
  // TODO: Add 'Add to cart' button for online orders
  return (
    <article className="food-card">
      <figure className="food-card-image">
        <img src={image} alt={`Dish: ${title}`} height={200} />
        <figcaption className="visually-hidden">{title}</figcaption>
      </figure>
      <div className="food-card-body">
        <header className="food-card-body-header">
          <div className="food-card-body-title-header">
            <h2 className="food-card-title">{title}</h2>
            <span className="food-card-price">{price}</span>
          </div>
          <section className="food-card-description">{description}</section>
        </header>
        <div className="food-card-delivery">
          <span className="food-card-delivery-title">Order a delivery</span>
          <img src={deliveryIcon} alt="Order via Uber Eats" />
        </div>
      </div>
    </article>
  );
};

export default FoodCard;
