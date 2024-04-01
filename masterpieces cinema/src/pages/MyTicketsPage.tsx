import React from 'react';
import { useTicketContext } from '../components/MyTickets/TicketContext'; 

const MyTicketPage: React.FC = () => {
  const { tickets } = useTicketContext();

  return (
    <div>
      <h1>My Tickets</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            Ticket #{ticket.id}: Full Name: {ticket.fullName} - Seat: {ticket.seat} - Payment: {ticket.paymentMethod} - Price: {ticket.price} ALL - Movie: {ticket.movie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTicketPage;
