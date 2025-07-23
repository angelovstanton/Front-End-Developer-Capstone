import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm HTML5 validation attributes', () => {
  const mockOnFormSubmit = jest.fn();
  const mockDispatchOnDateChange = jest.fn();
  const availableTimes = ["12:00", "13:00", "14:00"];

  beforeEach(() => {
    render(
      <BookingForm
        onFormSubmit={mockOnFormSubmit}
        isFormSubmitted={false}
        availableTimes={availableTimes}
        dispatchOnDateChange={mockDispatchOnDateChange}
      />
    );
  });

  test('date input has correct attributes', () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('aria-required', 'true');
    expect(dateInput).toHaveAttribute('aria-invalid', 'false');
  });

  test('time select has correct attributes', () => {
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute('aria-required', 'true');
    expect(timeSelect).toHaveAttribute('aria-invalid', 'false');
  });

  test('people input has correct attributes', () => {
    const peopleInput = screen.getByLabelText(/number of people/i);
    expect(peopleInput).toHaveAttribute('type', 'number');
    expect(peopleInput).toHaveAttribute('min', '1');
    expect(peopleInput).toHaveAttribute('max', '10');
    expect(peopleInput).toHaveAttribute('aria-required', 'true');
    expect(peopleInput).toHaveAttribute('aria-invalid', 'false');
  });

  test('occasion select has correct attributes', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('aria-required', 'true');
    expect(occasionSelect).toHaveAttribute('aria-invalid', 'false');
  });
});

describe('BookingForm JS validation', () => {
  const mockOnFormSubmit = jest.fn();
  const mockDispatchOnDateChange = jest.fn();
  const availableTimes = ["12:00", "13:00", "14:00"];

  function setup() {
    render(
      <BookingForm
        onFormSubmit={mockOnFormSubmit}
        isFormSubmitted={false}
        availableTimes={availableTimes}
        dispatchOnDateChange={mockDispatchOnDateChange}
      />
    );
  }

  test('valid form submits without errors', () => {
    setup();
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-06-01' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText(/number of people/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'birthday' } });
    fireEvent.click(screen.getByRole('button', { name: /book a table/i }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('invalid form shows errors', () => {
    setup();
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/number of people/i), { target: { value: '0' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /book a table/i }));
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/number of people must be between/i)).toBeInTheDocument();
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
  });
});
