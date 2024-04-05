import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Ticket {
  id: number;
  fullName: string;
  seat: string;
  paymentMethod: 'card' | 'theater';
  price: number;
  movie: string;
}

interface TicketContextType {
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    return JSON.parse(localStorage.getItem('tickets') ?? '[]') as Ticket[];
  });

  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  const addTicket = (ticket: Ticket) => {
    return new Promise<void>((resolve) => {
      setTickets(prevTickets => {
        const lastTicketId = prevTickets.length > 0 ? prevTickets[prevTickets.length - 1].id : 0;
        const newTicketId = lastTicketId + 1;
        const newTickets = [...prevTickets, { ...ticket, id: newTicketId, paymentMethod: ticket.paymentMethod, price: 700}];
        localStorage.setItem('tickets', JSON.stringify(newTickets));
        console.log('Ticket added and local storage updated:', newTickets);
        resolve();
        return newTickets; 
      });
    });
  };
  
  

  return (
    <TicketContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
};


export const useTicketContext = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTicketContext must be used within a TicketProvider');
  }
  return context;
}

export default TicketContext;