import React, { useState, useEffect } from 'react';

const MyTicketsPage: React.FC = () => {
  const [tickets, setTickets] = useState<string[]>([]);

  const fetchUserTickets = () => {
    const fetchedTickets = ['Ticket 1', 'Ticket 2', 'Ticket 3'];
    setTickets(fetchedTickets);
  };


  useEffect(() => {
    fetchUserTickets();
  }, []); 

  return (
    <div>
      <h2>My Purchased Tickets</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>{ticket}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyTicketsPage;
