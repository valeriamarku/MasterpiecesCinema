import React, { useState } from 'react';
import { useTicketContext } from '../components/MyTickets/TicketContext'; 
import Header from '../components/Header/Header';
import { Movie } from '../types/Movie';

const MyTicketPage: React.FC = () => {
  const { tickets } = useTicketContext();
  const [, setFilteredMovies] = useState<Movie[]>([]);

  return (
    <div>
      <Header setFilteredMovies={setFilteredMovies} />
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

