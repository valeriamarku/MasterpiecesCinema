import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ReservationForm from "./components/ReservationForm/ReservationForm";
import MyTickets from "./pages/MyTicketsPage";
import LikedMovies from "./components/LikedMovies/LikedMovies";
import { LikedMoviesProvider } from "./components/LikedMovies/LikedMoviesContext";


const App: React.FC = () => {
  return (
    <LikedMoviesProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              
              <>
                <HomePage />
              </>
              
            }
          />
          <Route path="/movie-details/:id" element={<MovieDetailsPage />} />
          <Route path="/reserve" element={<ReservationForm />} />
          <Route path="/my-tickets" element={<MyTickets/>} />
          <Route path="/liked-movies" element={<LikedMovies/>} />
        </Routes>
      </div>
    </Router>
    </LikedMoviesProvider>
  );
};

export default App;
