import React from "react";
import "./Popup.css";
import Button from "../Button/Button";

const Popup = ({ title, description, onClose }) => {
  return (
    <>
      <div data-testid="popup-background" className="popup-background" onClick={onClose}></div>
      <section
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <header>
          <h2 id="popup-title" className="popup-title">{title}</h2>
        </header>
        <p id="popup-description" className="popup-description">{description}</p>
        <div className="popup-button">
          <Button onClick={onClose} title="Close" />
        </div>
      </section>
    </>
  );
};

export default Popup;
