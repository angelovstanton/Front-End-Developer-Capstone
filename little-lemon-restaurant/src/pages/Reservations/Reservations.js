// Reservations.js
import React, { useState, useReducer } from "react";
import "./Reservations.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import Popup from "../../components/Popup/Popup";
import { useNavigate } from "react-router-dom";
import pages from "../../utils/pages";
import { fetchAPI } from "../../utils/Api";

/**
 * Reservations page for booking a table at Little Lemon.
 * Handles form submission, available times, and confirmation popup.
 * TODO: Add reservation history for logged-in users
 */
const Reservations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Handles form submission and popup display
  const handleFormSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(Boolean);
    if (areAllFieldsFilled) setIsPopupVisible(true);
  };

  // Reducer for updating available times
  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  // Initializes available times
  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main data-testid="reservations-component" className="reservation" aria-label="Table reservation">
      <section className="reservation-card" aria-labelledby="reservation-title">
        <h1 id="reservation-title" className="reservation-title">Table reservation</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      </section>
      {isPopupVisible && (
        <Popup
          onClose={() => {
            setIsPopupVisible(false);
            navigate(pages.get("home").path);
          }}
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
        />
      )}
    </main>
  );
};

export default Reservations;
