import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./BookingForm.css";

const getToday = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const BookingForm = ({
  onFormSubmit,
  isFormSubmitted = false,
  availableTimes = [],
  dispatchOnDateChange
}) => {
  // Smart defaults
  const [formValues, setFormValues] = useState({
    date: getToday(),
    time: availableTimes[0] || "",
    people: 2,
    occasion: "other",
  });
  const [errors, setErrors] = useState({});

  // Handles input changes for all fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') {
      dispatchOnDateChange(value);
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const minGuest = 1;
  const maxGuest = 10;

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formValues.date) newErrors.date = "Date is required.";
    if (!formValues.time) newErrors.time = "Time is required.";
    if (!formValues.people || formValues.people < minGuest || formValues.people > maxGuest) newErrors.people = `Number of people must be between ${minGuest} and ${maxGuest}.`;
    if (!formValues.occasion) newErrors.occasion = "Occasion is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onFormSubmit(e, formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <fieldset className="reservation-fieldset">
        <legend className="reservation-legend">Reservation Details</legend>
        <section className="reservation-section" aria-label="Reservation form">
          <label htmlFor="date" className="containter-item-title">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formValues.date}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.date}
            className={errors.date ? "error" : ""}
          />
          {errors.date && <span className="form-error" role="alert">{errors.date}</span>}

          <label htmlFor="time" className="containter-item-title">Time</label>
          <select
            id="time"
            name="time"
            value={formValues.time}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.time}
            className={errors.time ? "error" : ""}
          >
            <option value="">Select time...</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && <span className="form-error" role="alert">{errors.time}</span>}

          <label htmlFor="people" className="containter-item-title">Number of people</label>
          <input
            type="number"
            id="people"
            name="people"
            min={minGuest}
            max={maxGuest}
            value={formValues.people}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.people}
            className={errors.people ? "error" : ""}
          />
          {errors.people && <span className="form-error" role="alert">{errors.people}</span>}

          <label htmlFor="occasion" className="containter-item-title">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formValues.occasion}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.occasion}
            className={errors.occasion ? "error" : ""}
          >
            <option value="">Select occasion...</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
          {errors.occasion && <span className="form-error" role="alert">{errors.occasion}</span>}
        </section>
      </fieldset>
      <div className="reservation-button">
        <Button title="Book a table" type="submit" aria-label="Submit reservation form" />
      </div>
    </form>
  );
};

export default BookingForm;
