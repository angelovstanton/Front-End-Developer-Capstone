import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";

const testimonialsData = [
  {
    id: 1,
    author: "Andrea Piacquadio",
    description:
      "Little Lemon's Bruschetta is super tasty, perfectly crispy bread coupled with the freshest tomatoes.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5,
  },
  {
    id: 2,
    author: "Alex Umerov",
    description:
      "The burger at Little Lemon was super tasty, perfectly cooked meat and harmonious ingredients.",
    image:
      "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5,
  },
  {
    id: 3,
    author: "Havier Sanches",
    description:
      "The Greek Salad at Little Lemon was super fresh and tasty, with a high-quality dressing.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4,
  },
];

const Testimonials = () => {
  // TODO: Add a form for users to submit their own testimonials

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <header className="testimonials-header">
        <h1 id="testimonials-title" className="testimonials-title">Testimonials</h1>
      </header>
      <ul className="testimonials-list">
        {testimonialsData.map(({ id, ...testimonial }) => (
          <li key={id} className="testimonials-list-item">
            <TestimonialCard {...testimonial} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
