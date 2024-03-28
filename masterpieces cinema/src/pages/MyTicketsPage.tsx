import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyTickets: React.FC = () => {
  const [ticket, setTicket] = useState<any>(null);

  const fetchUserTicket = async () => {
    try {
      const response = await fetch('API_ENDPOINT/tickets/user'); 
      const data = await response.json();
      setTicket(data); 
    } catch (error) {
      console.error('Error fetching user ticket:', error);
    }
  };

 
  useEffect(() => {
    fetchUserTicket();
  }, []); 

  return (
    <div className="my-tickets">
      <h2>My Ticket</h2>
      {ticket && (
        <div>
          <p>Ticket ID: {ticket.id}</p>
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MyTickets;
