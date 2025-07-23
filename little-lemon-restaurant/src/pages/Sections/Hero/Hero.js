import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import chefImage from "../../../assets/restaurantchef2.jpg";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();

  // Handles navigation to the reservations page
  const handleReserveClick = () => {
    navigate(pages.get("reservations").path);
  };

  return (
    <header className="hero-background" role="banner">
      <section className="hero" aria-label="Introduction">
        <div className="hero-info">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p>
            Nestled in the heart of bustling Chicago, Little Lemon is where
            modern flair meets cozy nostalgia. Our diverse, artisanal menu,
            featuring delectable bruschettas, succulent burgers, and refreshing
            Greek salads, is a testament to our belief that food is an art.
          </p>
          <Button title="Reserve a table" onClick={handleReserveClick} />
        </div>
        <figure className="hero-figure">
          <img
            className="hero-image"
            src={chefImage}
            alt="Chef preparing food at Little Lemon restaurant"
            height={200}
            width={200}
          />
          <figcaption className="visually-hidden">Chef at Little Lemon restaurant</figcaption>
        </figure>
      </section>
      {/* TODO: Add animation to hero image on scroll */}
    </header>
  );
};

export default Hero;
