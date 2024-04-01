import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { useTicketContext } from '../MyTickets/TicketContext';

interface Ticket {
  id: number;
  fullName: string;
  seat: string;
  paymentMethod: 'card' | 'theater';
  price: number;
  movie: string;
}

const ReservationForm: React.FC = () => {
  const [numberOfTickets, setNumberOfTickets] = useState<string>('');
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [reservationType, setReservationType] = useState<string>('');
  const location = useLocation();
  const selectedMovie = location.state ? (location.state as { movie: string }).movie : 'Default Movie';

  console.log('Received movie title:', selectedMovie);

  const { addTicket } = useTicketContext();
  const navigate = useNavigate();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (numberOfTickets.trim() === '' || tickets.length !== parseInt(numberOfTickets)) {
      alert('Please fill in all fields.');
      return;
    }
    if (!areSeatsUnique()) {
      alert('Please ensure all seats are unique.');
      return;
    }
    if (reservationType === 'reservation') {
      const totalAmount = calculateTotalAmount(tickets.length);
      alert(`Reservation successful! Total amount: ${totalAmount} ALL`);
    } else if (reservationType === 'purchase') {
      alert('Online purchase successful!');
    }
  
    await Promise.all(tickets.map((ticket, index) => {
      return addTicket({ 
        ...ticket, 
        id: index + 1, 
        paymentMethod: reservationType === 'reservation' ? 'theater' : 'card', 
        price: 700, 
        movie: selectedMovie 
      });
    }));
    
  
    navigate('/my-tickets');
  };
  

  const calculateTotalAmount = (numTickets: number): number => {
    return numTickets * 700;
  };

  const handleTicketChange = (index: number, key: keyof Ticket, value: string) => {
    const updatedTickets = [...tickets];
    updatedTickets[index] = {
      ...updatedTickets[index],
      [key]: value
    };
    setTickets(updatedTickets);
  };

  const areSeatsUnique = (): boolean => {
    const seatSet = new Set();
    for (const ticket of tickets) {
      if (seatSet.has(ticket.seat)) {
        return false;
      }
      seatSet.add(ticket.seat);
    }
    return true;
  };

  const renderTicketInputs = () => {
    const inputs: JSX.Element[] = [];
    for (let i = 0; i < parseInt(numberOfTickets); i++) {
      inputs.push(
        <div key={i}>
          <label>
            Full Name:
            <input
              type="text"
              value={tickets[i]?.fullName || ''}
              onChange={(e) => handleTicketChange(i, 'fullName', e.target.value)}
              required
            />
          </label>
          <label>
            Seat:
            <input
              type="text"
              value={tickets[i]?.seat || ''}
              onChange={(e) => handleTicketChange(i, 'seat', e.target.value.toUpperCase())}
              required
            />
          </label>
        </div>
      );
    }
    return inputs;
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      Number of Tickets:
      <input
        type="number"
        value={numberOfTickets}
        onChange={(e) => {
          if (parseInt(e.target.value) <= 5) {
            setNumberOfTickets(e.target.value);
          }
        }}
        min="1"
        max="5"
        required
      />

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
      {renderTicketInputs()}
      {reservationType === "purchase" && (
        <>
          <label>
            Card Number:
            <input type="text" required />
          </label>
          <label>
            CVV:
            <input type="text" required />
          </label>
          <label>
            Expiration Date:
            <input type="text" required />
          </label>
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;
