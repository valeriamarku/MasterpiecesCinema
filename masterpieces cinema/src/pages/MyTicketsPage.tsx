import React, { useState } from 'react';
import { useTicketContext } from '../components/MyTickets/TicketContext'; 
import Header from '../components/Header/Header';
import style from './MyTicketsPage.module.css';
import { Movie } from '../types/Movie';

const MyTicketPage: React.FC = () => {
  const { tickets } = useTicketContext();
  const [, setFilteredMovies] = useState<Movie[]>([]);

  return (
    <div>
      <Header setFilteredMovies={setFilteredMovies} />
      <h1 className={style.mytickets}>My Tickets</h1>
      <div className={style.cardWrap}>
        {tickets.map(ticket => (
          <>
          <div className={`${style.card} ${style.cardLeft}`} key={ticket.id}>
            <h1>Masterpieces <span>Cinema</span></h1>
            <div className={style.title}>
              <h2>{ticket.movie}</h2>
              <span>movie</span>
            </div>
            <div className={style.name}>
              <h2>{ticket.fullName}</h2>
              <span>name</span>
            </div>
            <div className={style.seat}>
              <h2>{ticket.seat}</h2>
              <span>seat</span>
            </div>
            <div className={style.time}>
              <h2>12:00</h2>
              <span>time</span>
            </div>
            <div className={style.price}>
              <h2>{ticket.price} ALL</h2>
              <span>price</span>
            </div>
          </div>
          <div className={`${style.card} ${style.cardRight}`}>
          <div className={style.eye}></div>
          <div className={style.number}>
            <h3>{ticket.seat}</h3>
            <span>seat</span>
          </div>
          <div className={style.barcode}></div>
        </div>
        </>
        ))}

      </div>
    </div>
    
  );
};

export default MyTicketPage;
