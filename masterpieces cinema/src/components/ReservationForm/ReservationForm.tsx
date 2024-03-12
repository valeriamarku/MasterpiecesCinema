import React, { useState } from 'react';

const ReservationForm: React.FC = () => {
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const [seatSelection, setSeatSelection] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [reservationType, setReservationType] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (numberOfTickets.trim() === '' || seatSelection.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    if (reservationType === 'reservation') {
      const totalAmount = calculateTotalAmount(Number(numberOfTickets));
      alert(`Reservation successful! Total amount: ${totalAmount}`);
    } else if (reservationType === 'purchase') {
      if (cardNumber.trim() === '' || cvv.trim() === '' || expirationDate.trim() === '') {
        alert('Please fill in all payment details.');
        return;
      }
      alert('Online purchase successful!');
    }
    window.location.href = '/';
  };

  const calculateTotalAmount = (numTickets: number): number => {
    return numTickets * 700;
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <label>
        Number of Tickets:
        <input
          type="number"
          value={numberOfTickets}
          onChange={(e) => setNumberOfTickets(e.target.value)}
          min="1"
          max="5"
          required
        />
      </label>
      <label>
        Seat Selection:
        <input
          type="text"
          value={seatSelection}
          onChange={(e) => setSeatSelection(e.target.value)}
          required
        />
      </label>
      <label>
        Reservation Type:
        <select
          value={reservationType}
          onChange={(e) => setReservationType(e.target.value)}
          required
        >
          <option value="">Select Reservation Type</option>
          <option value="reservation">Reservation (Payment at Theater)</option>
          <option value="purchase">Online Purchase</option>
        </select>
      </label>
      {reservationType === 'purchase' && (
        <>
          <label>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </label>
          <label>
            Expiration Date:
            <input
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required
            />
          </label>
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;
