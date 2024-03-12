import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReservationForm from './components/ReservationForm/ReservationForm';
import SearchBar from './components/SearchBar/SearchBar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/reserve-tickets" element={<ReservationForm />} />
          <Route path="/search-bar" element={<SearchBar/>} />
          <Route path="/" element={<h1>Welcome to Masterpieces Cinema!</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
