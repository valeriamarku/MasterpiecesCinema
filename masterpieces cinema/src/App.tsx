import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ReservationForm from "./components/ReservationForm/ReservationForm";
import MyTicketsPage from "./pages/MyTicketsPage";

const App: React.FC = () => {
  return (
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
          <Route path="/my-tickets" element={<MyTicketsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
