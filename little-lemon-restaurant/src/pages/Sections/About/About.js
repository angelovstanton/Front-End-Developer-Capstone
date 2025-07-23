import React from "react";
import "./About.css";
import foodImage from "../../../assets/restaurantfood2.jpg";
import restaurantImage from "../../../assets/restaurant2.jpg";

const About = () => {
  // TODO: Add chef bios or team section
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-content">
        <header className="about-header">
          <h1 id="about-title" className="about-title">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
        </header>
        <p className="about-description">
          Nestled in the heart of bustling Chicago, Little Lemon is where modern
          flair meets cozy nostalgia. Our diverse, artisanal menu, featuring
          delectable bruschettas, succulent burgers, and refreshing Greek
          salads, is a testament to our belief that food is an art. Crafted by
          expert chefs with locally-sourced ingredients, our dishes not only
          delight the palate but nourish the soul. Whether you're seeking a
          romantic dinner, a family meal, or a relaxed atmosphere with friends,
          Little Lemon is your ideal culinary destination. Find us in the heart
          of Chicago for an unforgettable experience.
        </p>
      </div>
      <div className="about-images">
        <figure className="about-figure">
          <img
            className="about-image-restaurant"
            src={foodImage}
            alt="Signature dish at Little Lemon restaurant"
            height={200}
            width={200}
          />
          <figcaption className="visually-hidden">Signature dish at Little Lemon restaurant</figcaption>
        </figure>
        <figure className="about-figure">
          <img
            className="about-image-bruchetta"
            src={restaurantImage}
            alt="Dining area at Little Lemon restaurant"
            height={200}
            width={200}
          />
          <figcaption className="visually-hidden">Dining area at Little Lemon restaurant</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default About;
