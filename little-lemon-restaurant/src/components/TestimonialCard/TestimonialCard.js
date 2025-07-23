import React from "react";
import "./TestimonialCard.css";
import starIcon from "../../assets/star.svg";

const TestimonialCard = ({ author, description, image, rating }) => {
  return (
    <article className="testimonial-card" data-testid="testimonial-card">
      <header>
        <div className="testimonial-card-container">
          <img className="testimonial-profile-picture" src={image} alt={`Profile of ${author}`} height={50} />
          <p className="testimonial-card-author">{author}</p>
        </div>
        <ul className="testimonial-rating" aria-label="Rating">
          {rating &&
            [...Array(rating)].map((_, index) => (
              <li key={index} style={{ display: 'inline' }}>
                <img src={starIcon} alt="star" height={15} width={15} />
              </li>
            ))}
        </ul>
      </header>
      <section className="testimonial-description">{description}</section>
    </article>
  );
};

export default TestimonialCard;
